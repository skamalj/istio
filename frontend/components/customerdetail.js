export default 
Vue.component('customerdetail', {
  data: function () {
    return {
      lastname: "a",
      firstname: "b"
    }
  },
  props: ['customernumber'],
  watch: {
    customernumber: function (oldnum, newnum) {
      var vueObj = this;
      if (oldnum != newnum)
        axios.get("http://istio.wiprogcn.com/getCustomerDetails/"+newnum).then(function (response) {
          vueObj.lastname = response.data[0].contactLastName;
          vueObj.firstname = response.data[0].contactFirstName;
        });
    }
  },
  template: '<div>{{ lastname + " " + firstname}}</div> '
})
