import React, { useState } from 'react';
import { Table, Button, Modal, Input, Menu, Layout } from 'antd';
import {
  UnorderedListOutlined,
  EditOutlined,
  DeleteOutlined,
  HomeOutlined,
} from '@ant-design/icons';

const { Header, Content } = Layout;

const Classinfo = () => {
  const [data, setData] = useState([
    { id: 1, className: 'BCA' },
    { id: 2, className: 'BBA' },
    { id: 3, className: 'B.com' },
  ]);

  const [editModalVisible, setEditModalVisible] = useState(false);
  const [deleteModalVisible, setDeleteModalVisible] = useState(false);
  const [selectedClass, setSelectedClass] = useState(null);
  const [editedClassName, setEditedClassName] = useState('');

  const columns = [
    {
      title: 'Classname',
      dataIndex: 'className',
      key: 'className',
    },
    {
      title: 'Edit',
      key: 'edit',
      render: (_, record) => (
        <Button type="link" onClick={() => handleEdit(record)}>
          <EditOutlined /> Edit
        </Button>
      ),
    },
    {
      title: 'Delete',
      key: 'delete',
      render: (_, record) => (
        <Button type="link" danger onClick={() => handleDelete(record)}>
          <DeleteOutlined /> Delete
        </Button>
      ),
    },
  ];

  const handleEdit = (record) => {
    setSelectedClass(record);
    setEditedClassName(record.className);
    setEditModalVisible(true);
  };

  const handleEditConfirm = () => {
    setData((prevData) =>
      prevData.map((item) =>
        item.id === selectedClass.id ? { ...item, className: editedClassName } : item
      )
    );
    setEditModalVisible(false);
  };

  const handleEditCancel = () => {
    setEditModalVisible(false);
  };

  const handleDelete = (record) => {
    setSelectedClass(record);
    setDeleteModalVisible(true);
  };

  const handleDeleteConfirm = () => {
    setData((prevData) => prevData.filter((item) => item.id !== selectedClass.id));
    setDeleteModalVisible(false);
  };

  const handleDeleteCancel = () => {
    setDeleteModalVisible(false);
  };
  

  return (
    <Layout>
      <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '24px' }}>
        <Table columns={columns} dataSource={data}    title={() => <h3>Class Info</h3>} />
        <Modal
          title="Edit Class"
          visible={editModalVisible}
          onOk={handleEditConfirm}
          onCancel={handleEditCancel}
        >
          <Input value={editedClassName} onChange={(e) => setEditedClassName(e.target.value)} />
        </Modal>
        <Modal
          title="Delete Class"
          visible={deleteModalVisible}
          onOk={handleDeleteConfirm}
          onCancel={handleDeleteCancel}
          okType="danger"
        >
          <p>Are you sure you want to delete {selectedClass && selectedClass.className}?</p>
        </Modal>
      </Content>
    </Layout>
  );
};

export default Classinfo;
