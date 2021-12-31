import React from 'react';
import Layout from '../../components/Layout';
import getParams from '../../utils/getParams';
import ProductPage from './ProductPage';
import ProductStore from './ProductStore';
import ClothingAndAccessories from './ClothingAndAccessories';
import './style.css';


/**
* @author
* @function ProductsListPage
**/

const ProductsListPage = (props) => {

   const renderProducts = () => {
       console.log(props);
       const params = getParams(props.location.search);
       console.log(params);
       let content = null;
       switch(params.type){
            case 'store':
               content = <ProductStore {...props} />
               break;
            
            case 'page':
                content = <ProductPage {...props} />
                break;

            default:
                content = <ClothingAndAccessories {...props} />;
       }
       return content;
   }

    return (
        <Layout>
            {renderProducts()}
        </Layout>
    )

}

export default ProductsListPage;