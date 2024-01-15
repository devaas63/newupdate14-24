import React, { useState } from 'react';
import { Layout, Menu, Table, Button, Modal, Form, Input } from 'antd';

  import { EditOutlined,  HomeOutlined, DeleteOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;

const Teacherinfo = () => {
  const [teachers, setTeachers] = useState([
    { key: '1', name: 'Nima', allocatedClass: 'BCA B' },
    { key: '2', name: 'Vishnu', allocatedClass: 'BCA A' },
    // Add more teacher data as needed
  ]);

  const [isEditModalVisible, setIsEditModalVisible] = useState(false);
  const [editedTeacher, setEditedTeacher] = useState({});
  const [form] = Form.useForm();

  const editColumn = {
    title: 'Edit',
    key: 'edit',
    render: (_, record) => (
      <Button type="link" onClick={() => handleEdit(record)}>
        <EditOutlined /> Edit
      </Button>
    ),
  };

  const deleteColumn = {
    title: 'Delete',
    key: 'delete',
    render: (_, record) => (
      <Button type="link" danger onClick={() => handleDelete(record.key)}>
        <DeleteOutlined /> Delete
      </Button>
    ),
  };

  const columns = [
    {
      title: 'Teacher Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Allocated Class',
      dataIndex: 'allocatedClass',
      key: 'allocatedClass',
    },
    editColumn,
    deleteColumn,
  ];

  const handleEdit = (teacher) => {
    setEditedTeacher(teacher);
    setIsEditModalVisible(true);
    form.setFieldsValue(teacher);
  };

  const handleEditModalOk = () => {
    form.validateFields().then((values) => {
      setTeachers((prevTeachers) =>
        prevTeachers.map((teacher) =>
          teacher.key === editedTeacher.key ? { ...teacher, ...values } : teacher
        )
      );
      setIsEditModalVisible(false);
    });
  };

  const handleEditModalCancel = () => {
    setIsEditModalVisible(false);
  };

  const handleDelete = (key) => {
    setTeachers((prevTeachers) => prevTeachers.filter((teacher) => teacher.key !== key));
  };

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" icon={<HomeOutlined />}>Home</Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Table dataSource={teachers}
         columns={columns} pagination={false}
         title={() => <h3>Teacher's Info</h3>} 
         bordered   
        size='small'  />

        {/* Edit Teacher Modal */}
        <Modal
          title="Edit Teacher"
          visible={isEditModalVisible}
          onOk={handleEditModalOk}
          onCancel={handleEditModalCancel}
        >
          <Form form={form} initialValues={editedTeacher}>
            <Form.Item name="name" label="Teacher Name" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
            <Form.Item name="allocatedClass" label="Allocated Class" rules={[{ required: true }]}>
              <Input />
            </Form.Item>
          </Form>
        </Modal>
      </Content>
    </Layout>
  );
};

export default Teacherinfo