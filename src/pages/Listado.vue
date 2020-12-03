<!-- *********************************************************************************  -->
<!-- ******************************     Listado   ************************************  -->
<!-- *********************************************************************************  -->
<template>
    <!-- contenedor principal -->
    <q-page>

        <div class="mr-5 ml-5 mr-10 px-10 bg-gray-100 mt-10 rounded-md pb-5">
            
            <!-- Titulo -->
            <h1 class="text-2xl py-10"> Listado </h1>
            
            <!-- Table -->
            <q-table
                title="Ejemplo"
                :data="info"
                :columns="columns"
                row-key="name"
                :pagination="initialPagination"
            />

        </div>
    </q-page> 
</template>

<script>
export default {

    name: 'Listado',

    data () {
        return {

            initialPagination: {
                                sortBy: 'desc',
                                descending: false,
                                page: 1,
                                rowsPerPage: 8
                            },
            columns: [
                { name: 'nombre', required: true, label: 'Nombre', field: 'nombre', align: 'left', sortable: true },
                { name: 'documento', align: 'center', label: 'Documento', field: 'documento', sortable: true, align: 'left' },
                { name: 'direccion', label: 'Dirección', field: 'direccion', sortable: true, align: 'left' },
                { name: 'contacto', label: 'Contacto', field: 'contacto', align: 'left' }
            ],

            info: [
                    { nombre: 'Juan Romero',        documento: 'Dui: 04044444-1', direccion: 'COL. EX-NORMAL TUXTEPEC', contacto: '7744-4444' },
                    { nombre: 'Daniel Sosa',        documento: 'Dui: 04044444-2', direccion: 'COL. EX-NORMAL TUXTEPEC', contacto: '7744-4444' },
                    { nombre: 'Diego Ruiz',         documento: 'Dui: 04044444-3', direccion: 'COL. EX-NORMAL TUXTEPEC', contacto: '7744-4444' },
                    { nombre: 'Lucas Flores',       documento: 'Dui: 04044444-4', direccion: 'COL. EX-NORMAL TUXTEPEC', contacto: '7744-4444' },
                    { nombre: 'Juan Torres',        documento: 'Dui: 04044444-5', direccion: 'COL. EX-NORMAL TUXTEPEC', contacto: '7744-4444' },
                    { nombre: 'Emiliano Rojas',     documento: 'Dui: 04044444-6', direccion: 'COL. EX-NORMAL TUXTEPEC', contacto: '7744-4444' },
                    { nombre: 'Leonardo Castillo',  documento: 'Dui: 04044444-7', direccion: 'COL. EX-NORMAL TUXTEPEC', contacto: '7744-4444' },
                    { nombre: 'Dylan Ojeda',        documento: 'Dui: 04044444-8', direccion: 'COL. EX-NORMAL TUXTEPEC', contacto: '7744-4444' }
            ]
        }
    }
}
</script>