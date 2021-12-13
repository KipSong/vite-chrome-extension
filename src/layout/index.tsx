import { Layout, Menu } from "antd";
import { NavLink } from "react-router-dom";
import {
  SlackOutlined,
  ThunderboltFilled,
  HomeOutlined,
} from "@ant-design/icons";
import styles from "./index.module.less";
const { Content, Sider } = Layout;

interface LayoutProps {
  children?: React.ReactNode;
}

export default (props: LayoutProps) => {
  const { children } = props;
  return (
    <Layout style={{ height: 300 }}>
      <Sider
        className={styles.sider}
        collapsed={true}
        trigger={null}
        theme={"light"}
      >
        <Menu className={styles.menu} mode="inline" defaultSelectedKeys={["1"]}>
          <Menu.Item key="1" icon={<HomeOutlined />}>
            <NavLink to={"/dashboard"}>Home</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<SlackOutlined />}>
            {/* TODO */}
          </Menu.Item>
          <Menu.Item key="3" icon={<ThunderboltFilled />}>
            {/* TODO */}
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout style={{ backgroundColor: "#fff" }}>
        <Content style={{ padding: 12 }}>{children}</Content>
      </Layout>
    </Layout>
  );
};
