import { BASE_URL } from '@/shared/config';
import { fixImageUrl } from '@/shared/data';

const CartPageItem = ({ itemOrder = {} }) => {
  const { product = {}, amount } = itemOrder;
  const {
    id,
    slug,
    name,
    description,
    salePrice = 0,
    attachments = [],
  } = product || {};
  const attachment = attachments[0] || {};
  return (
    <div className="d-sm-flex justify-content-between align-items-center my-4 pb-3 border-bottom">
      <div className="media media-ie-fix d-block d-sm-flex align-items-center text-center text-sm-left">
        <a className="d-inline-block mx-auto mr-sm-4" href="shop-single-v1.html" style={{ width: '10rem' }}>
          <img src={`${BASE_URL}${fixImageUrl(attachment.path)}`} alt={attachment.name} />
        </a>
        <div className="media-body pt-2">
          <h3 className="product-title font-size-base mb-2">
            <a href="shop-single-v1.html">{name}</a>
          </h3>
          <div className="font-size-sm">
            <span className="text-muted mr-2">Size:</span>8.5
          </div>
          <div className="font-size-sm">
            <span className="text-muted mr-2">Color:</span>White &amp; Blue
          </div>
          <div className="font-size-lg text-accent pt-2">
            ${salePrice}.<small>00</small>
          </div>
        </div>
      </div>
      <div className="pt-2 pt-sm-0 pl-sm-3 mx-auto mx-sm-0 text-center text-sm-left" style={{ maxWidth: '9rem' }}>
        <div className="form-group mb-0">
          <label className="font-weight-medium" htmlFor="quantity1">
            Quantity
          </label>
          <input className="form-control" type="text" value={amount} />
        </div>
        <button className="btn btn-link px-0 text-danger" type="button">
          <i className="czi-close-circle mr-2" />
          <span className="font-size-sm">Remove</span>
        </button>
      </div>
    </div>
  );
};
export default CartPageItem;
