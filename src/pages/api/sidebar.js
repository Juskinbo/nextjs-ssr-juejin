import { CMSDOMAIN } from "utils";
//此页面为获取侧边栏广告信息列表的页面
export default async function getSiedbarProps(req, res) {
  let data = await fetch(`${CMSDOMAIN}/api/sidebars`)
    .then(data => data.json());
  res.status(200).json(data);
}
