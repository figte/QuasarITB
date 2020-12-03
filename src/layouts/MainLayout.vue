
<!-- *********************************************************************************  -->
<!-- ******************************  Base layout  ************************************  -->
<!-- *********************************************************************************  -->
<template>
  <!-- Quasar layout -->
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        
        <!-- Menu btn -->
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />

        <!--  Titulo -->
        <q-toolbar-title>
          ITB EJemplo
        </q-toolbar-title>

        <!-- Quaar version -->
        <div>Quasar v{{ $q.version }}</div>

      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="bg-grey-2"
    >
      <q-list>
        
        <!-- Titulo -->
        <q-item-label
          header
          class="text-grey-8"
        >
          Menú
        </q-item-label>
        
        <!-- Links  -->
        <EssentialLink
          v-for="link in menu"
          :key="link.title"
          v-bind="link"
        />

      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>

import EssentialLink from 'components/EssentialLink.vue';
import { mapState } from "vuex";

export default {
  
  name: 'MainLayout',
  
  components: { EssentialLink },

  data () {
    return {
      // Menu estatus
      leftDrawerOpen: false,
      // Menu( links )
      essentialLinks: []
    }
  },
  computed : {
		...mapState( "appstore", [ "menu" ] )
	}

}
</script>
