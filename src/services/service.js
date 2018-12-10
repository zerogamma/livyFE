import request from 'superagent';


const dataService = store => next => (action) => {
  console.log(store)
  next(action);
  switch (action.type) {
    case 'GET_DATA':{
      request.get('https://raw.githubusercontent.com/rrafols/mobile_test/master/data.json').end((err, res) => {
        if (err) {
          return next({
            type: 'DATA_NOT_FOUND',
            err,
          });
        }
        const data = JSON.parse(res.text);
        next({
          type: 'LOAD_MAIN_STATE',
          payload: data
        });
      });
    }
  }
};



export default dataService;
