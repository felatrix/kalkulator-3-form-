import React from 'react'
import classes from './App.css';
import Forms from './components/Forms/Forms';
import Operators from './components/Operators/Operators';
import Result from "./components/Result/Result";
import ErrorMsg from "./components/ErrorMsg/ErrorMsg";

class App extends React.Component {
      state = {
        values : [
        '',
        '',
        ''
        ],
        hasil : 0,
        error:false
    }

    valueHandler = (key)=>{
        return (event)=>{
            let values = this.state.values;
            var state = {values};
            values[key] = event.target.value;
            this.setState(state);
        }
    }
    checkListHandler = (val)=>{
      if(val !== ''){
        return true;
      }
    }

    tambahHandler = (val)=>{
      let i=0;
      val.map((key)=>{
        if(key !== ''){
        i++;    
        }
      });
      if(i >1){
        let filtered = val.filter(function(value, index, arr){
          return value > 0;
      });
        let hasilTambah = filtered.reduce((total,num)=>{
            return Number(total) + Number(num);
        });
        this.setState({
          hasil:hasilTambah,
          error:false
        });
      } else if(i<=1){
        this.setState({
          error:true
        })
      }
      };
    
      kurangHandler = (val)=>{
        let i=0;
        val.map((key)=>{
          if(key !== ''){
          i++;    
          }
        });
        if(i >1){
          let filtered = val.filter(function(value, index, arr){
            return value > 0;
        });
          let hasilKurang = filtered.reduce((total,num)=>{
              return total - num;
          });
          this.setState({
            hasil:hasilKurang,
            error:false
          });
        } else if(i<=1){
          this.setState({
            error:true
          })
        }
        };

        kaliHandler = (val)=>{
          let i=0;
          val.map((key)=>{
            if(key !== ''){
            i++;    
            }
          });
          if(i >1){
            let filtered = val.filter(function(value, index, arr){
              return value > 0;
          });
            let hasilKali = filtered.reduce((total,num)=>{
                return total * num;
            });
            this.setState({
              hasil:hasilKali,
              error:false
            });
          } else if(i<=1){
            this.setState({
              error:true
            })
          }
          };

          bagiHandler = (val)=>{
            let i=0;
            val.map((key)=>{
              if(key !== ''){
              i++;    
              }
            });
            if(i >1){
              let filtered = val.filter(function(value, index, arr){
                return value > 0;
            });
              let hasilKali = filtered.reduce((total,num)=>{
                  return total / num;
              });
              this.setState({
                hasil:hasilKali,
                error:false
              });
            } else if(i<=1){
              this.setState({
                error:true
              })
            }
            };

      render()
      {
        return (
          <div className={classes.App}>
            <div>
            <Forms 
              value1={this.state.values[0]}
              value2={this.state.values[1]}
              value3={this.state.values[2]}
              valueHandler1={this.valueHandler(0)}
              valueHandler2={this.valueHandler(1)}
              valueHandler3={this.valueHandler(2)}
              showChecklist1={this.checkListHandler(this.state.values[0])}
              showChecklist2={this.checkListHandler(this.state.values[1])}
              showChecklist3={this.checkListHandler(this.state.values[2])}
            />
            <Operators
              tambah={()=>this.tambahHandler(this.state.values)}
              kurang={()=>this.kurangHandler(this.state.values)}
              kali={()=>this.kaliHandler(this.state.values)}
              bagi={()=>this.bagiHandler(this.state.values)}
            />
            <ErrorMsg isError={this.state.error}/>
            <Result hasil={this.state.hasil}/>
            </div>
          </div>
        )
      }
}
export default App;
