export default
Vue.component('customerdetail', {
  data: function () {
    return {
      customername: "Customer Details",
      lastname: "Details",
      firstname: "Customer",
      phone: "",
      addressline1: null,
      addressline2: null,
      city: "",
      state: "",
      country: "",
      postalcode: "",
      salesrep: "",
      creditlimit: ""
    }
  },
  computed : {
    address: {
      get: function() {
       var address = "";
       if (this.addressline1) address = this.addressline1;
       if (this.addressline2) address += "," + this.addressline2;
       if (this.city) address +=  "," + this.city;
       if (this.state) address +=  "," + this.state;
       if (this.country) address += "," + this.country;
       if (this.postalcode) address += "-" + this.postalcode;
       return address;
      } 
    }
  },
  props: ['customernumber'],
  watch: {
    customernumber: function (newnum, oldnum) {
      var vueObj = this;
      if (oldnum != newnum)
      axios.get("loadCustomerDetails/" + newnum).then(function (response) {
        vueObj.lastname = response.data[0].contactLastName;
        vueObj.firstname = response.data[0].contactFirstName;
        vueObj.addressline1 = response.data[0].addressLine1;
        vueObj.addressline2 = response.data[0].addressLine2;
        vueObj.city = response.data[0].city;
        vueObj.state = response.data[0].state;
        vueObj.country = response.data[0].country;
        vueObj.postalCode = response.data[0].postalCode;
        vueObj.customername = response.data[0].customerName;
        vueObj.phone = response.data[0].phone;
        vueObj.salesrep = response.data[0].salesRepEmployeeNumber;
        vueObj.creditlimit = response.data[0].creditLimit;
      });
    }
  },
  template: '<div class="card bg-dark text-light"> \
    <div class="card-body text-xs-left"> \
      <div class="row"> \
         <h5 class="card-title">{{ customername }}</h5> \
      </div> \
      <div class="row"> \
        <div class="col"> \
           <h5><span class="badge badge-secondary">Primary Contact</span></h5> \
        </div> \
        <div class="col"> \
          <span class="card-text text-left">{{ firstname + " " + lastname }} </span> \
        </div> \
        <div class="col"> \
           <h5><span class="badge badge-secondary">Phone No.</span></h5> \
        </div> \
        <div class="col"> \
          <span class="card-text text-left">{{ phone }} </span> \
        </div> \
      </div> \
      <div class="row"> \
        <div class="col-3"> \
           <h5><span class="badge badge-secondary">Address</span></h5> \
        </div> \
        <div class="col-9"> \
          <span class="card-text text-left">{{ address }} </span> \
        </div> \
      </div> \
      <div class="row"> \
        <div class="col"> \
           <h5><span class="badge badge-secondary">Sales Rep.</span></h5> \
        </div> \
        <div class="col"> \
          <span class="card-text text-left">{{ salesrep}} </span> \
        </div> \
        <div class="col"> \
           <h5><span class="badge badge-secondary">Credit Limit</span></h5> \
        </div> \
        <div class="col"> \
          <span class="card-text text-left">{{ creditlimit}} </span> \
        </div> \
      </div> \
    </div> \
  </div>'
  })
