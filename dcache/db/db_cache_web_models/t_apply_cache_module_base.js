/**
 * Tencent is pleased to support the open source community by making Tars available.
 *
 * Copyright (C) 2016THL A29 Limited, a Tencent company. All rights reserved.
 *
 * Licensed under the BSD 3-Clause License (the "License"); you may not use this file except
 * in compliance with the License. You may obtain a copy of the License at
 *
 * https://opensource.org/licenses/BSD-3-Clause
 *
 * Unless required by applicable law or agreed to in writing, software distributed
 * under the License is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR
 * CONDITIONS OF ANY KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations under the License.
 */

module.exports = function (sequelize, DataTypes) {
  return sequelize.define('t_apply_cache_module_base', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    status: {
      type: DataTypes.INTEGER(4),
      allowNull: false,
      defaultValue: 0,
    },
    area: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: '',
    },
    apply_id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
    },
    cache_version: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: 1,
    },
    mkcache_struct: {
      type: DataTypes.INTEGER(4),
      allowNull: true,
      defaultValue: 0,
    },
    follower: {
      type: DataTypes.STRING(255),
      allowNull: false,
      defaultValue: '',
    },
    create_person: {
      type: DataTypes.STRING(50),
      allowNull: false,
      defaultValue: '',
    },
    modify_time: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: DataTypes.NOW,
    },
  }, {
    tableName: 't_apply_cache_module_base',
    timestamps: false,
  });
};
