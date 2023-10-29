

export default {

    name: 'daybook',
    component: () => import(/* webpackChunkName: "deybook" */ '@/modules/daybook/layouts/DayBookLayout.vue'),
    children: [
        {
            path:'',
            name:'no-entry',
            component: () => import(/* webpackChunkName: "no-entry" */ '@/modules/daybook/views/NoEntrySelecter.vue'),
        },
        {
            path:':id',
            name:'entry',
            component: () => import(/* webpackChunkName: "entryview" */ '@/modules/daybook/views/EntryView.vue'),
        }
    ]
}