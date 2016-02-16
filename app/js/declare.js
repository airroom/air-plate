export default declare;

function declare(module, fnMap, mapType) {
  Object.keys(fnMap).forEach((key) => {
    const item = fnMap[key];

    if (!item) {
      return;
    }

    if (item.fn && typeof item.fn === 'function') {
      module[mapType](item.name, item.fn);
      return;
    }

    declare(module, item, mapType);
  });
}
