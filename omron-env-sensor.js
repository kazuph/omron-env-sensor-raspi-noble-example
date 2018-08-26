/*
 * OMRON ENV Sensor library
 *
 * Author: Bathtimefish
 * Created: 2018.8.18
 */

function OmronEnv() {
  /* pass */
};

OmronEnv.prototype._litlleEndialize = function(v) {
  if(v.length !== 4) {
    throw new Error('invalid data length. data length must 4');
  }
  return v.substring(2,4) + v.substring(0,2);
};

OmronEnv.prototype._numberize4byte = function(v) {
  //console.info(v);
  if(v.length !== 4) {
    throw new Error('invalid data length. data length must 4');
  }
  return parseInt(this._litlleEndialize(v), 16); // / 100
};

OmronEnv.prototype._numberize2byte = function(v) {
  //console.info(v);
  if(v.length !== 2) {
    throw new Error('invalid data length. data length must 2');
  }
  return parseInt(v, 16);
};

OmronEnv.prototype._parseData = function(v) {
  if(v.length !== 44) {
    throw new Error('invalid data length. packet data length must 44');
  }
  var data = {
    "companyId": this._numberize4byte(v.substring(0, 4)),
    "no": this._numberize2byte(v.substring(4, 6)),
    "temp": this._numberize4byte(v.substring(6, 10)) / 100,
    "hum": this._numberize4byte(v.substring(10, 14)) / 100,
    "light": this._numberize4byte(v.substring(14, 18)),
    "uv": this._numberize4byte(v.substring(18, 22)) / 100,
    "pressure": this._numberize4byte(v.substring(22, 26)) / 10,
    "sound": this._numberize4byte(v.substring(26, 30)) / 100,
    "disconf": this._numberize4byte(v.substring(30, 34)) / 100,
    "heat": this._numberize4byte(v.substring(34, 38)) / 100,
    "rfu": this._numberize4byte(v.substring(38, 42)),
    "battery": this._numberize2byte(v.substring(42, 44)) 
  };
  return data;
};

OmronEnv.prototype.parse = function(v) {
  var packet = v || null;
  if(!v) {
    throw new Error('data is empty');
  }
  return parsedData = this._parseData(v);
};

module.exports = OmronEnv;
