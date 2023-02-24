import { CMSDOMAIN } from "utils";

export default async function getLabelInfo(req, res) {
  let data = await fetch(`${CMSDOMAIN}/api/labels`)
    .then(data => data.json());
  res.status(200).json(data);
}