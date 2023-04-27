import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Pagination() {
    const Navigate= useNavigate();

    
  return (
 <>
 

 <div class="demo">
    <nav class="pagination-outer" aria-label="Page navigation">
        <ul class="pagination">
            <li class="page-item">
                <a  onClick={()=>{
                                                              Navigate('/work2')

                                                            }} class="page-link" aria-label="Previous">
                    <span aria-hidden="true">«</span>
                </a>
            </li>
            <li class="page-item "><a class="page-link" onClick={()=>{
                                                              Navigate('/work')

                                                            }}>1</a></li>
            <li class="page-item"><a class="page-link" onClick={()=>{
                                                              Navigate('/work2')

                                                            }}
       >2</a></li>
            <li class="page-item "><a class="page-link" onClick={()=>{
                                                              Navigate('/work3')

                                                            }}>3</a></li>
            <li class="page-item"><a class="page-link" onClick={()=>{
                                                              Navigate('/work4')

                                                            }}>4</a></li>
                                                            
                                                            
                                                             <li class="page-item"><a class="page-link" onClick={()=>{
                                                              Navigate('/work5')

                                                            }}>5</a></li> 
                                                            
                                                            
                                                            <li><a 
                                                           
></a> </li>
         

                
        </ul>
    </nav>
</div>
 
 
 
 </>
  )
}
