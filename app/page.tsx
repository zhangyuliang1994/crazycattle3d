import HomeTemplate from "./home/page";
import { metadata } from './home/layout';

export { metadata };  // 导出 metadata 给路由系统使用

export default function Page() {
  return <HomeTemplate />;
}



