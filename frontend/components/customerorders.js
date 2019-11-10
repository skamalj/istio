export default
  Vue.component('customerorders', {
    data: function () {
      return {
         orderlist: ""
      }
    },
    props: ['customernumber'],
    watch: {
      customernumber: function (newnum, oldnum) {
        var vueObj = this;
        if (oldnum != newnum)
          axios.get("loadCustomerOrders/" + newnum).then(function (response) {
              vueObj.orderlist = response.data;
          });
      }
    },
    template: '<div class="card bg-dark text-light"> \
  <table class="table table-striped table-dark table-bordered table-hover table-sm small"> \
  <thead class="thead-light"> \
    <tr> \
      <th scope="col">Order Number</th> \
      <th scope="col">Product Name</th> \
      <th scope="col">Quantity</th> \
      <th scope="col">Price Per Item</th> \
      <th scope="col">Order Date</th> \
      <th scope="col">Status</th> \
      <th scope="col">Shipped Date</th> \
    </tr> \
  </thead> \
  <tbody> \
    <tr v-for="item in orderlist"> \
      <td> \{{ item.orderNumber }} </td> \
      <td> \{{ item.productName }} </td> \
      <td> \{{ item.quantityOrdered }} </td> \
      <td> \{{ item.priceEach }} </td> \
      <td> \{{ item.orderDate }} </td> \
      <td> \{{ item.status }} </td> \
      <td> \{{ item.shippedDate }} </td> \
    </tr> \
  </tbody> \
</table> \
  </div>'
  })
