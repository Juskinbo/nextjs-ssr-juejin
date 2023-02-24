import { CMSDOMAIN } from "utils";

export default async function getLayoutInfo(req, res) {
  let data = await fetch(`${CMSDOMAIN}/api/layouts`)
    .then(data => data.json());
  res.status(200).json(data);
}