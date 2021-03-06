const _ = require('lodash');
const Mock = require('mockjs');

const model = require('../model/user.js');
const pageHelper = require('../libs/pageHelper');

let total = model.list.data.length;
let datas = model.list.data;

const list = (req, res) => {
  const { psize, offset } = req.query;
  res.send({
    status: 'success',
    total,
    datas: pageHelper(offset, psize, datas)
  });
};

const post = (req, res) => {
  const user = req.body;
  user.id = Mock.Random.id();
  user.ip = Mock.Random.ip();
  datas = [user].concat(datas);
  res.send({ msg: '新增成功' });
};

const put = (req, res) => {
  const userId = req.params.userId;
  const user = req.body;
  const index = _.findIndex(datas, (row) => row.id === userId);
  if (index >= 0) datas[index] = _.merge(datas[index], user);
  res.send({ msg: '更新成功' });
};

const del = (req, res) => {
  const userId = req.params.userId;
  datas = _.filter(datas, (row) => row.id !== userId);
  total = datas.length;
  res.send({ msg: '删除成功' });
  // res.status(400).send({ msg: '删除失败' });
};

module.exports = {
  list,
  post,
  put,
  del
};
