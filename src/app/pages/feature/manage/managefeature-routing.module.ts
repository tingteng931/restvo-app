import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {ManagefeaturePage} from "./managefeature.page";

const routes: Routes = [
    {
        path: ':id',
        component: ManagefeaturePage,
        children: [
            {
                path: 'insight',
                children: [
                    {
                        path: ':id',
                        loadChildren: './feature-insight/feature-insight.module#FeatureInsightPageModule'
                    },
                ]
            },
            {
                path: 'profile',
                children: [
                    {
                        path: ':id',
                        loadChildren: '../showfeature/showfeature.module#ShowfeaturePageModule'
                    },
                ]
            },
            {
                path: 'people',
                children: [
                    {
                        path: ':id',
                        loadChildren: '../editparticipants/editparticipants.module#EditparticipantsPageModule'
                    },
                ]
            },
            {
                path: 'programs',
                children: [
                    {
                        path: ':id',
                        loadChildren: './feature-childactivities/feature-childactivities.module#FeatureChildActivitiesPageModule'
                    },
                ]
            },
            {
                path: 'relationships',
                children: [
                    {
                        path: ':id',
                        loadChildren: './feature-childactivities/feature-childactivities.module#FeatureChildActivitiesPageModule'
                    },
                ]
            },
            {
                path: 'plans',
                children: [
                    {
                        path: ':id',
                        loadChildren: './feature-childactivities/feature-childactivities.module#FeatureChildActivitiesPageModule'
                    },
                ]
            },
            {
                path: 'contents',
                children: [
                    {
                        path: ':id',
                        loadChildren: './feature-childactivities/feature-childactivities.module#FeatureChildActivitiesPageModule'
                    },
                ]
            },
            {
                path: 'schedule',
                children: [
                    {
                        path: '',
                        loadChildren: './feature-schedule/feature-schedule.module#FeatureSchedulePageModule'
                    },
                ]
            },
            {
                path: 'new-schedule',
                children: [
                    {
                        path: '',
                        loadChildren: './feature-schedule/feature-schedule.module#FeatureSchedulePageModule'
                    },
                ]
            },
            {
                path: 'onboarding',
                children: [
                    {
                        path: ':id',
                        loadChildren: '../../discover/preferences/preferences.module#PreferencesPageModule'
                    },
                ]
            },
        ]
    },
    ];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ManagefeatureRoutingModule { }
