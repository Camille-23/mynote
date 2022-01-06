import { cloneDeep } from 'lodash';

setIsCollapsed = (k: any) => {
  const { questList } = this.state;
  let _questList = cloneDeep(questList);
  _questList.forEach((items: any, id: number) => {
    if (id === k) {
      items.choosed = !items.choosed;
    }
  });
  _questList = _questList.length < 10 ? _questList : _questList.splice(0, 9);
  this.setState({
    questList: _questList
  });
  //console.log(this.state.questList, '2345');
};