import {reactive} from "vue";

export default {
    data(){
        return{
            music_source:[
                [
                    {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                    {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                    {  note:'note_1',  height:0,  length:4},
                    {  note:'note_9',  height:0,  length:4},
                    {  note:'note_10'},
                    {  note:'note_3',  height:0,  length:8,delay:true},
                    {  note:'note_2',  height:0,  length:16},
                    {  note:'note_1',  height:0,  length:8},
                    {  note:'note_6',  height:-1,  length:8},
                    {  note:'note_5',  height:-1,  length:4},
                    {  note:'note_9',  height:0,  length:4,},
                    {  note:'note_10'},
                    {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                    {  note:'note_10'},
                    {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                    {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                    {  note:'note_9',  height:0,  length:4},
                    {  note:'note_10'}
                ],
                [
                    {  note:'note_3',  height:0,  length:8},
                    {  note:'note_2',  height:0,  length:16},
                    {  note:'note_1',  height:0,  length:8},
                    {  note:'note_6',  height:-1,  length:8},
                    {  note:'note_5',  height:-1,  length:4},
                    {  note:'note_9',  height:0,  length:4,}
                ],
                [
                    {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                ],
                [
                    {  note:'note_6',  height:2,  length:4,Ligature:'Ligature_1'},
                    {  note:'note_5',  height:1,  length:4,Ligature:'Ligature_3'},
                    {  note:'note_3',  height:0,  length:4,Ligature:'Ligature_1'},
                    {  note:'note_2',  height:-1,  length:4,Ligature:'Ligature_2'},
                    {  note:'note_1',  height:-2,  length:4,Ligature:'Ligature_3'},
                ],
                [
                    {  note:'note_6',  height:2,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_5',  height:1,  length:8,Ligature:'Ligature_3'},
                    {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_2',  height:-1,  length:8,Ligature:'Ligature_2'},
                    {  note:'note_1',  height:-2,  length:8,Ligature:'Ligature_3'},
                ],
                [
                    {  note:'note_6',  height:2,  length:16,Ligature:'Ligature_1'},
                    {  note:'note_5',  height:1,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_3',  height:0,  length:16,Ligature:'Ligature_1'},
                    {  note:'note_2',  height:-1,  length:16,Ligature:'Ligature_2'},
                    {  note:'note_1',  height:-2,  length:16,Ligature:'Ligature_3'},
                ],
                [
                    {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                    {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                    {  note:'note_1',  height:0,  length:4},
                    {  note:'note_9',  height:0,  length:4},
                    {  note:'note_10'},
                    {  note:'note_3',  height:0,  length:8,delay:true},
                    {  note:'note_2',  height:0,  length:16},
                    {  note:'note_1',  height:0,  length:8},
                    {  note:'note_6',  height:-1,  length:8},
                    {  note:'note_5',  height:-1,  length:4},
                    {  note:'note_9',  height:0,  length:4,},
                    {  note:'note_10'},
                    {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                    {  note:'note_10'},
                    {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                    {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                    {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                    {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                    {  note:'note_9',  height:0,  length:4},
                    {  note:'note_10'}
                ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
                // [
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1',delay:true},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:4},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'},
                //     {  note:'note_3',  height:0,  length:8,delay:true},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,},
                //     {  note:'note_10'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_5',  height:-1,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_6',  height:-1,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_1',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:8,Ligature:'Ligature_3'},
                //     {  note:'note_10'},
                //     {  note:'note_6',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_5',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_3',  height:0,  length:8,Ligature:'Ligature_1'},
                //     {  note:'note_2',  height:0,  length:16,Ligature:'Ligature_2'},
                //     {  note:'note_1',  height:0,  length:16,Ligature:'Ligature_3'},
                //     {  note:'note_2',  height:0,  length:4,Ligature:'Ligature_2'},
                //     {  note:'note_9',  height:0,  length:4},
                //     {  note:'note_10'}
                // ],
                // [
                //     {  note:'note_3',  height:0,  length:8},
                //     {  note:'note_2',  height:0,  length:16},
                //     {  note:'note_1',  height:0,  length:8},
                //     {  note:'note_6',  height:-1,  length:8},
                //     {  note:'note_5',  height:-1,  length:4},
                //     {  note:'note_9',  height:0,  length:4,}
                // ],
            ]
        }
    },
    methods:{
        keydownFun(e,x,y){

            // console.log(e)

            ////////////////
            // 加入新组件的操作
            ////////////////

            // 音符0-7
            if(/[0-7]/.test(e.key) && this.editAfter==false && this.editFront==false){
                let timeObj={note:`note_${parseInt(e.key)}`,height:0,length:4}
                this.music[x].splice(y+1,0,timeObj)
                this.$nextTick(()=>{this.$refs['note'+x+'_'+(y+1)][0].$el.focus()})
            }
            // 重复音
            if(e.key=='-'){
                let timeObj={note:`note_9`,height:0,length:4}
                this.music[x].splice(y+1,0,timeObj)
                this.$nextTick(()=>{this.$refs['note'+x+'_'+(y+1)][0].$el.focus()})
            }
            // 小结分界线
            if(e.key=='|'){
                let timeObj={note:`note_10`,height:0,length:4}
                this.music[x].splice(y+1,0,timeObj)
                this.$nextTick(()=>{this.$refs['note'+x+'_'+(y+1)][0].$el.focus()})
            }

            ////////////////
            // 移动光标的操作
            ////////////////
            // 上
            if(e.key=='ArrowUp'){
                if(x!=0){
                    if(y<this.music[x-1].length){
                        this.$nextTick(()=>{this.$refs['note'+(x-1)+'_'+(y)][0].$el.focus()})
                    }else{
                        const num=this.music[x-1].length-1
                        this.$nextTick(()=>{this.$refs['note'+(x-1)+'_'+num][0].$el.focus()})
                    }
                }
            }
            // 下
            if(e.key=='ArrowDown'){
                if(x<this.music.length-1){
                    if(y<this.music[x+1].length){
                        this.$nextTick(()=>{this.$refs['note'+(x+1)+'_'+(y)][0].$el.focus()})
                    }else{
                        const num=this.music[x+1].length-1
                        this.$nextTick(()=>{this.$refs['note'+(x+1)+'_'+num][0].$el.focus()})
                    }
                }
            }
            // 左
            if(e.key=='ArrowLeft'){
                if(y!=0){
                    this.$nextTick(()=>{this.$refs['note'+x+'_'+(y-1)][0].$el.focus()})
                }else if(x!=0){
                    this.$nextTick(()=>{this.$refs['note'+(x-1)+'_'+(this.music[x-1].length-1)][0].$el.focus()})
                }
            }
            // 右
            if(e.key=='ArrowRight'){
                if(y<this.music[x].length-1){
                    this.$nextTick(()=>{this.$refs['note'+x+'_'+(y+1)][0].$el.focus()})
                }else if(x<this.music.length-1){
                    this.$nextTick(()=>{this.$refs['note'+(x+1)+'_'+0][0].$el.focus()})
                }
            }
            // 光标移动到行首
            if(e.key=='Home'){this.$refs['note'+x+'_'+(0)][0].$el.focus()}
            // 光标移动到行尾
            if(e.key=='End'){this.$refs['note'+x+'_'+(this.music[x].length-1)][0].$el.focus()}


            // 删除键(回退)
            if(e.key=='Backspace'){
                if(y!=0){
                    this.music[x].splice(y,1)
                    this.$nextTick(()=>{this.$refs['note'+x+'_'+(y-1)][0].$el.focus()})
                }else if(x!=0){
                    const time_y=this.music[x-1].length-1
                    const timeArr=[]
                    timeArr.push(...this.music[x])
                    timeArr.shift()
                    this.music[x-1].push(...timeArr)
                    this.music.splice(x,1)
                    this.$nextTick(()=>{this.$refs['note'+(x-1)+'_'+time_y][0].$el.focus()})
                }
            }
            // 删除键
            if(e.key=='Delete'){
                const length_x=this.music.length
                const length_y=this.music[x].length
                if(y+1!=length_y){
                    this.music[x].splice(y+1,1)
                }else if(x+1!=length_x){
                    const timeArr=[]
                    timeArr.push(...this.music[x+1])
                    timeArr.shift()
                    this.music[x].push(...timeArr)
                    this.music.splice(x+1,1)
                    this.music = [...this.music]
                }
            }
            // 回车
            if(e.key=='Enter'){
                const timeArr=reactive([])
                this.music.splice(x+1,0,timeArr)
                this.music[x+1]=this.music[x].filter((item,index)=>index>y)
                this.music[x]=this.music[x].filter((item,index)=>index<=y)
                this.moveCursor(x+1,0)
                this.$nextTick(()=>{this.$refs['note'+(x+1)+'_'+0][0].$el.focus()})
            }


            ////////////////
            // 修改当前音符的操作
            ////////////////
            // 附点
            if(e.key=='.'){if(y!=0){
                this.music[x][y].delay=!this.music[x][y].delay}
                this.music = [...this.music]
            }
            // 下划线
            if(e.key=='_'){
                if(y!=0){
                    this.music[x][y].length=this.music[x][y].length==16?4:this.music[x][y].length*2
                    this.music = [...this.music]
                }
            }
            // 提高音阶
            if(e.key=='u' || e.key=='U'){
                this.music[x][y].height+=1
                if(this.music[x][y].height==3){this.music[x][y].height=-2}
                this.music = [...this.music]
            }
            // 降低音阶
            if(e.key=='d' || e.key=='D'){
                this.music[x][y].height-=1
                if(this.music[x][y].height==-3){this.music[x][y].height=2}
                this.music = [...this.music]
            }
            // 开始连音线
            if(e.key=='b' || e.key=='B'){
                // 如果是行首{光标占位}不能启用连音线
                if(y==0){return}
                // 如果不是音符(小结分界线，增时线)，不能启用连音线
                if(!/note_[1-7]$/.test(this.music[x][y].note)){return}
                if(this.music[x][y].Ligature){
                    // 如果本身就是连音线开头或中间，则不改变
                    if(['Ligature_1','Ligature_2'].includes(this.music[x][y].Ligature))return;
                    // 如果是上一个连音线的结尾，则将其改为中间继续往后延续
                    else if(this.music[x][y].Ligature=='Ligature_3'){this.music[x][y].Ligature='Ligature_2'}
                    // 如果之前没有连音线，才设置为连音线开头
                    else {this.music[x][y].Ligature='Ligature_1'}
                }else{
                    Reflect.set(this.music[x][y],"Ligature",'Ligature_1')
                }
                this.music = [...this.music]
            }
            // 结束连音线
            if(e.key=='e' || e.key=='E'){
                if(this.music[x][y].Ligature && ['Ligature_2','Ligature_1'].includes(this.music[x][y].Ligature)){
                    this.music[x][y].Ligature='Ligature_3'
                }
                this.music = [...this.music]
            }
            // 开启依音编辑状态
            if (e.key == 'a') {
                this.editAfter=true
            } else if (e.key == 'f') {
                this.editFront=true
            }
            // 输入前后依音
            if(/[0-7]/.test(e.key) && this.editAfter==true && this.editFront==false){
                this.music[x][y].after=e.key
                this.music = [...this.music]
            }else if(/[0-7]/.test(e.key) && this.editAfter==false && this.editFront==true){
                this.music[x][y].front=e.key
                this.music = [...this.music]
            }

        },
    }
}
