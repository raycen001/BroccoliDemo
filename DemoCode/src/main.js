import React from "react";
import "./index.css";
import { Layout,Typography,Row,Col,Button} from 'antd';
import Dialog from "./submitForm";
import DisplayResult from "./submitResult";

const { Header, Footer, Content} = Layout;
const { Title } = Typography;


export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {showModel:false,showResult:false};
    this.openForm = this.openForm.bind(this);
  }

  openForm(){
    this.setState({
      showModel: true,
    });
  }

  render() {
    var {
      showModel,
      showResult
    } = this.state;

    const close = () => {
      this.setState({
        showModel: false,
        showResult:false,
      })
    }

    const showSuccess = () => {
      console.log('ok');
      this.setState({
        showModel:false,
        showResult:true,
      })
    }
    
    return (
      <>
        <Layout>
          <Header className="header">
            <Row>
              <Col span={2}></Col>
              <Col span={22}><Title level={4} className="title4">BROCCOLI & CO.</Title></Col>
            </Row>
          </Header>
          <Content>
            <table className="content">
              <tr className="blankRow"></tr>
              <tr>
                <Title level={1}>A  better  way  <br/>to  enjoy  every  day</Title>
                <br/>
                <p>Be  the  first  to  know  when  we  launch</p>
                <Button size="large" className="btn" onClick={this.openForm}>Request an Invite</Button>
              </tr>
              <tr className="blankRow"></tr>
            </table>
            <Dialog isModalVisible={showModel} onCancel={close} onSuccess={showSuccess}></Dialog>
            <DisplayResult isModalVisible={showResult} onCancel={close} ></DisplayResult>
          </Content>
          <Footer className="footer">
             <div>
               Made with ❤️  in Melbourne.<br/>
               © 2021 Brocolli & Co. All rights reserved.
             </div>

          </Footer>
        </Layout>
      </>
    );
  }
}
