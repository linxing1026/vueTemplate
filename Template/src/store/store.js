
/**
 * Created by xing.lin on 2018/1/29.
 */
import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

const state={
    count:1
}

const mutations={
    add(state,n){
        state.count+=n;
    },
    reduce(state){
    	if(state.count<=1){
    		state.count=1;
    	}else{
    		state.count-=1;	
    	}
        
    }
}
const actions={

    "INC":(store)=>{
    	store.commit('add',1)
    },
    "RED":(store)=>{
    	store.commit('reduce')
    }
}
export default new Vuex.Store({
    state,
    mutations,
    actions
})