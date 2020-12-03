
<!-- *********************************************************************************  -->
<!-- ******************************      Links    ************************************  -->
<!-- *********************************************************************************  -->
<template>
  <q-item
    clickable
    @click="executeRoute( link )"
  >
    <q-item-section
      v-if="icon"
      avatar
    >
      <q-icon :name="icon" />
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script>
export default {
  name: 'EssentialLink',
  props: {
    title: {
      type: String,
      required: true
    },
    // Vue router( nombre - name )
    link: {
      type: String,
      default: '#'
    },

    icon: {
      type: String,
      default: ''
    }
  },
  methods : {
    executeRoute( routeName ){
      // Validar ruta
      if( this.$route.name !=  routeName ){
        // Redireccionar
        this.$router.push( { name: routeName } ); 
      }
      
    }
  }
}
</script>
