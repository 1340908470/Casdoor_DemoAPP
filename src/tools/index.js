import isArray from 'lodash/isArray';

export function jsToFormData(config: any) {
  //对象转formdata格式
  let formData = new FormData();
  let obj = config;
  let arrayKey = config.arrayKey;
  for (const i in obj) {
    if (isArray(obj[i])) {
      obj[i].map((item: string | Blob) => {
        if (!arrayKey) {
          formData.append(i, item);
        } else {
          formData.append(i + '[]', item);
        }
      });
    } else if (obj[i]) {
      for (var fileItem = 0; fileItem < obj[i].length; fileItem++) {
        if (!arrayKey) {
          formData.append(i, obj[i].item(fileItem));
        } else {
          formData.append(i + '[]', obj[i].item(fileItem));
        }
      }
    } else {
      formData.append(i, obj[i]);
    }
  }
  return formData;
}
