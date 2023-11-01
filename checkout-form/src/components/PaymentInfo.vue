<template>
  <div>
    <h3>Payment Info</h3>
    <div class="content">
      <img
        src="https://www.visa.gd/dam/VCOM/regional/lac/ENG/Default/Pay%20With%20Visa/Find%20a%20Card/Credit%20Cards/Gold/visagoldcredit-400x225.jpg"
        alt=""
      />
      <p v-if="error">{{ error }}</p>
      <h3 v-else> {{ success }}</h3>
      <form @submit.prevent="store">
        <label for="name">Name on card</label>
        <input v-model="name" type="text" name="name" />
        <label for="card">Card Number</label>
        <input v-model="card" type="text" name="card" />
        <div class="data">
            <label for="">Expiration Date</label>
          <div class="expiration">
            <input v-model="month" type="text" placeholder="Month" />
            <input v-model="year" type="text" placeholder="Year" />
          </div>
          <label for="">CVC</label>
          <div class="cvc">
            <input v-model="cvc" type="text" />
          </div>
        </div>
        <button type="submit" class="btn">Create Order</button>
      </form>
    </div>
  </div>
</template>

<script setup>
    import { ref, computed } from 'vue';
   
    const name = ref('')
    const card = ref('')
    const month = ref('')
    const year = ref('')
    const cvc = ref('')
    const error = ref('')
    const success = ref('')
  
    const store = ()=> {
        
        validate();
        if(!error.value)
        {
            let data = {
              "name": name.value,
              "card": card.value,
              "month": month.value,
              "year": year.value,
              "cvc": cvc.value
            }

            localStorage.setItem('store_data', JSON.stringify(data));
            success.value = "Order Stored!";
        }

    }

   const validate = ()=> {
        if(!name.value && name.value.length < 3 || !card.value && card.value.length < 11  || !month.value || !year.value || !cvc.value && cvc.value.length < 3)
        {
            error.value = "Please correct fill the form.";
        }
   }
    
</script>

<style scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  padding: 20px;
  border-radius: 5px;
}

form {
    display: flex;
    flex-direction: column;
}
form label 
{
    margin:0.5rem 5px;
}
form input 
{
    margin: 0.5rem 5px;
    padding: 1rem;
}
.data 
{
    margin-top: 0.5rem;
}

img 
{
    margin-bottom: 3rem;
}
h3 {
    text-align: center;
}

.btn 
{
    width: 50%;
    margin: auto;
    height: auto;
    padding: 1rem 0.5rem;
    background: green;
    color: #FEFEFE;
    border: none;
    margin-top: 1rem;
    border-radius: 1rem;
}


p {
  color: red;
}

h3 {
  color: green;
}

</style>
