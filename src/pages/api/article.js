import { CMSDOMAIN } from "utils";
//此页面为获取文章信息列表的页面

export default async function getArticleList(req, res) {
  let data = await fetch(`${CMSDOMAIN}/api/artinfos`)
    .then(data => data.json());
  res.status(200).json(data);
}
