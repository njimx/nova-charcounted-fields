Nova.booting(Vue => {
  Vue.component('index-text-counted', require('./components/TextCounted/IndexField').default);
  Vue.component('detail-text-counted', require('./components/TextCounted/DetailField').default);
  Vue.component('form-text-counted', require('./components/TextCounted/FormField').default);

  Vue.component('index-textarea-counted', require('./components/TextareaCounted/IndexField').default);
  Vue.component('detail-textarea-counted', require('./components/TextareaCounted/DetailField').default);
  Vue.component('form-textarea-counted', require('./components/TextareaCounted/FormField').default);
});
