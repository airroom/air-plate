export default declare;

function declare(module, fnMap, mapType) {
  Object.keys(fnMap).forEach((key) => {
    const item = fnMap[key];

    if (!item) {
      return;
    }

    if (item.def) {
      module[mapType](item.name, item.def);
      return;
    }

    declare(module, item, mapType);
  });
}
