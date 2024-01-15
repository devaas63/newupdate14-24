import React, { useState } from 'react';
import { Input, Button, Card, Layout, Modal, Row, Col , Select, Menu} from 'antd';
import {
  UserAddOutlined,
  InfoCircleOutlined,
  IdcardOutlined,
  HomeOutlined ,
} from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const { Header, Content } = Layout;

const Admindash = () => {
  const [teacherName, setTeacherName] = useState('');
  const [className, setClassName] = useState('');
  const [teachers, setTeachers] = useState([]);
  const [classes, setClasses] = useState([]);
  const [isAddTeacherModalOpen, setIsAddTeacherModalOpen] = useState(false);
  const [allocatedClass, setAllocatedClass] = useState('');
  const [isAddClassModalOpen, setIsAddClassModalOpen] = useState(false);
  const [isTeacherInfoModalOpen, setIsTeacherInfoModalOpen] = useState(false);
  const [isClassInfoModalOpen, setIsClassInfoModalOpen] = useState(false);
  const [isStatsModalOpen, setIsStatsModalOpen] = useState(false);

  const navigate = useNavigate();
  const showAddTeacherModal = () => {
    setIsAddTeacherModalOpen(true);
  };

  const showAddClassModal = () => {
    setIsAddClassModalOpen(true);
  };

  const showTeacherInfoModal = () => {
    setIsTeacherInfoModalOpen(true);
  };

  const showClassInfoModal = () => {
    setIsClassInfoModalOpen(true);
  };

  const showStatsModal = () => {
    setIsStatsModalOpen(true);
  };

  const handleOk = () => {
    setIsAddTeacherModalOpen(false);
    setIsAddClassModalOpen(false);
    setIsTeacherInfoModalOpen(false);
    setIsClassInfoModalOpen(false);
    setIsStatsModalOpen(false);
  };

  const handleCancel = () => {
    setIsAddTeacherModalOpen(false);
    setIsAddClassModalOpen(false);
    setIsTeacherInfoModalOpen(false);
    setIsClassInfoModalOpen(false);
    setIsStatsModalOpen(false);
  };

  const handleAddTeacher = () => {
    if (teacherName.trim() === '' || allocatedClass.trim() === '') {
      alert('Please fill in all fields.');
      return;
    }

    const newTeacher = {
      name: teacherName,
      allocatedClass: allocatedClass,
    };

    setTeachers([...teachers, newTeacher]);
    setTeacherName('');
    setAllocatedClass('');
    setIsAddTeacherModalOpen(false);
  };
  const { Option } = Select;


  const handleAddClass = () => {
    if (className.trim() === '') {
      alert('Please enter a class name.');
      return;
    }

    setClasses([...classes, className]);
    setClassName('');
    setIsAddClassModalOpen(false);
  };

  // Placeholder functions for handling button clicks
  const handleTeacherInfo = () => {
    
  };

  const handleClassInfo = () => {
    // Replace this with your logic to display class information
  };

  const handleStats = () => {
    // Replace this with your logic to display statistics
  };
  function Goto(path) {
    navigate(path)
  }



  return (
    <Layout>
       <Header>
        <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['home']}>
          <Menu.Item key="home" icon={<HomeOutlined />}>
            Home
          </Menu.Item>
        </Menu>
      </Header>
      <Content style={{ padding: '20px' }}>
        <Row gutter={[16, 16]} style={{marginBottom: '16px'}}>
          <Col span={8}>
            <Card
              title="Add Teacher"
              style={{
                background: '#b5e3e2',
                textAlign: 'center',
                animation: 'fadeIn 1s',
              }}
              hoverable
             
            >
              <UserAddOutlined style={{ fontSize: '60px' }} /><br></br>
              <Modal
                title="Add Teacher"
                visible={isAddTeacherModalOpen}
                onOk={handleAddTeacher}
                onCancel={handleCancel}
              >
                <Input
                  placeholder="Enter teacher name"
                  value={teacherName}
                  onChange={(e) => setTeacherName(e.target.value)}
                />
               <Select
                placeholder="Select allocated class"
                value={allocatedClass}
                onChange={(value) => setAllocatedClass(value)}
                style={{ marginTop: '10px', width: '100%' }}
              >
                {/* Three select options */}
                <Option value="ClassA">BCA</Option>
                <Option value="ClassB">BBA</Option>
                <Option value="ClassC">B.com</Option>
              </Select>
              </Modal>
              <Button type="primary" style={{ marginTop: '10px' }} onClick={showAddTeacherModal}>
                Add
              </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="Add Class"
              style={{
                background: '#b5e3e2 ',
                textAlign: 'center',
                animation: 'fadeIn 1s',
              }}
              hoverable
            >
              <UserAddOutlined style={{ fontSize: '60px' }} /><br></br>
              <Modal
                title="Add Class"
                visible={isAddClassModalOpen}
                onOk={handleAddClass}
                onCancel={handleCancel}
              >
                <Input
                  placeholder="Enter class name"
                  value={className}
                  onChange={(e) => setClassName(e.target.value)}
                />
              </Modal>
              <Button type="primary" style={{ marginTop: '10px' }} onClick={showAddClassModal}>
                Add
              </Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="Teacher Info"
              style={{
                background: '#b5e3e2',
                textAlign: 'center',
                animation: 'fadeIn 1s',
              }}
              onClick={handleTeacherInfo}
              hoverable
            >
              <IdcardOutlined style={{ fontSize: '60px' }} /><br></br>
              <Button type="primary" style={{ marginTop: '10px' }} onClick={() => Goto("/tinfo")}>View</Button>
            </Card>
          </Col>
        </Row>

        <Row gutter={[16, 16]} style={{marginBottom: '16px'}}>
          <Col span={8}>
            <Card
              title="Class Info"
              style={{
                background: '#b5e3e2',
                textAlign: 'center',
                animation: 'fadeIn 1s',
              }}
              onClick={handleClassInfo}
              hoverable
            >
              <IdcardOutlined style={{ fontSize: '60px' }} /><br></br>
              <Button type="primary" style={{ marginTop: '10px' }} onClick={() => Goto("/cinfo")}>View</Button>
            </Card>
          </Col>

          <Col span={8}>
            <Card
              title="Stats"
              style={{
                background: '#b5e3e2 ',
                textAlign: 'center',
                animation: 'fadeIn 1s',
              }}
              onClick={handleStats}
              hoverable
            >
              <InfoCircleOutlined style={{ fontSize: '60px' }} /><br></br>
              <Button type="primary" style={{ marginTop: '10px' }}>View</Button>
            </Card>
          </Col>
        </Row>

      </Content>

      {/* Modals */}
      {/* ... content for modals */}
    </Layout>
  );
};

export default Admindash;