const storage = require("../js/storage")
module.exports=require("./editOrder.html")({
  data:()=>({
    orders:[]
  }),
  mounted(){
    storage.get("orders").then(r=>{
      this.orders=r||[{
        name:"",
        price:0,
        fiat:"jpy"
      }]
    })
  },
  methods:{
    save(){
      storage.set("orders",this.orders).then(r=>{
        this.$ons.notification.alert("Saved!")
      })
    },
    add(){
      this.orders.push({
        name:"",
        price:0,
        fiat:"jpy"
      })
    },
    remove(i){

      this.orders.splice(i,1)
    }
  }
})
