/*
 * @Author: jinlei 
 * @Date: 2018-11-06 15:35:15 
 * @Last Modified by: jinlei
 * @Last Modified time: 2018-11-06 15:42:57
 */

 /**
  *  Generic Components 泛型组件
  */

  import * as React from 'react'
   
  export interface GenericListProps<T> {
      items : T[];
      itemRenderer : ( item : T) => JSX.Element;
  }

  export class GenericList<T> extends React.Component<GenericListProps<T>,{}> {
      render() {
        const {items, itemRenderer} = this.props    
        return(
            <div>
                {items.map(itemRenderer)}
            </div>
        )
      }
  }