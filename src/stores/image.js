import { defineStore } from 'pinia';

const imageStore = defineStore({
    id: 'image',
    state: () => ({
        list: [
            {
                slug: 'Wetogether',
                title: 'We Together',
                img: 'wetogrther.png',
                desc:'We Together merupakan sebuah website yang dibangun dengan tujuan untuk menggalang dana. We Together sebagai wadah masyarakat yang ingin menyalurkan bantuan kepada sesama.',
    
            },
            {
                slug: 'EDU AR',
                title: 'EDU AR',
                img: 'eduar.jpeg',
                desc:'Edu AR merupakan sebuah aplikasi edukasi yang diperuntukan untuk anak - anak yang masih pada masa pertumbuhan yang mengalami keterlambatan bicara. aplikasi edu Ar ini dapat memmunculkan object 3D dan menghasilkan output suara serta terdapat fitur speach recognition',
            },
            {
                slug: 'ACESCALE',
                title: 'ACESCALE',
                img: 'medicalscale.jpeg',
                desc:'Aplikasi ACESCALE merupakan sebuah aplikasi kesehatan yang terintegrasi dengan timbangan badan. Aplikasi ini dapat menampilkan komposisi tubuh dari engguna yang melakukan penimbang badan. Komposisi tubuh berupa berat badan, lemak, kadar air, protein, dan lainya',
            },

            
        ]
       
    }),
    actions: {},
    getters: {
        g$list: ({ list }) => list,
        g$detail: ({ list }) => {
            return (slug) => list.find((image) => image.slug == slug );
        }
    },
});

export default imageStore;