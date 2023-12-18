import { ActionReducerMapBuilder, createAsyncThunk } from "@reduxjs/toolkit";
import { AuthInterface } from "../interfaces";

export const getItens = createAsyncThunk('getitens/login', async () => {
    try {
      const resquest = await fetch('https://rickandmortyapi.com/api/character/?page=11');
      
      if (!resquest.ok) {
        const status = resquest.status;
        const data = await resquest.json(); // Obtém o corpo da resposta para o caso de erro
        return { status, data }; // Retorna um objeto com status e corpo em caso de erro
      }
  
      const resp = await resquest.json();
      return { status: resquest.status, data: resp }; // Retorna um objeto com status e corpo em caso de sucesso
    } catch (error) {
      throw error; // Lança o erro original sem modificá-lo
    }
});

export const getItensApi = (builder: ActionReducerMapBuilder<AuthInterface>) => {
  builder
      .addCase(getItens.fulfilled, (state, action) => {
          const itens = action.payload // pega resuldado do request
          
          console.log(itens) 

          state.isLoading = false

      })
      .addCase(getItens.pending, (state, action) => {
          state.isLoading = true
      })
      .addCase(getItens.rejected, (state, action) => {
          console.log(action.error);
          state.isLoading = false;
      });
        
};
