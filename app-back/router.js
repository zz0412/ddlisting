import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {

  this.route('category', function() {  // #/category
      //  #/category/todos  --> #/category/lvyou
      this.route('todos', { path: '/:category_id' }, function() {
          //   #/category/todos/todoitem  --> #/category/luyou/-xxxsdf
          this.route('todoitem', { path: '/:todo_id' });
      });
  });

// 手机端路由
  this.route('mobile-category', { path: '/mcategory' });
  this.route('mobile-todos', { path: '/mtodos/:category_id' });
  this.route('mobile-todoitem', { path: '/mtodoitem/:todo_id' });

  // this.route('mobile', function() {
  //     this.route('category', function() {  // #/mobile/category
  //         this.route('todos', function() {
  //             this.route('todoitem');
  //         });
  //     });
  // });

});
export default Router;