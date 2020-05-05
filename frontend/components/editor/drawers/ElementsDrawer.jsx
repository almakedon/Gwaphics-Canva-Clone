import React from 'react';
import { FiSearch, FiX } from 'react-icons/fi';
import styles from './ElementsDrawer.module.css';

const mockupResponse = [
  { id: 1, shape: 'circle', url: './assets/shapes/circle.svg#svg' },
  { id: 2, shape: 'rectangle', url: './assets/shapes/rectangle.svg#svg' },
  { id: 3, shape: 'triangle', url: './assets/shapes/triangle.svg#svg' },
  { id: 4, shape: 'hexagon', url: './assets/shapes/hexagon.svg#svg' },
  { id: 5, shape: 'pentagon', url: './assets/shapes/pentagon.svg#svg' },
  { id: 6, shape: 'rounded-square', url: './assets/shapes/rounded-square.svg#svg' },
  { id: 7, shape: 'heart', url: './assets/shapes/heart.svg#svg' },
  { id: 8, shape: 'star', url: './assets/shapes/star.svg#svg' },
  { id: 9, shape: 'right-triangle', url: './assets/shapes/right-triangle.svg#svg' },
];

class ElementsDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { info: false };
  }

  render() {
    return (
      <div className={styles.elementsDrawer}>
        <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <div className={styles.inputIcon}>
              <FiSearch />
              <input className={styles.input} type="text" placeholder="Search icons and shapes" />
            </div>
            <FiX />
          </div>
        </div>
        <div className={styles.itemList}>
          {mockupResponse.map((item) => (
            <div key={item.id} className={styles.item}>
              <svg>
                <use href={item.url} />
              </svg>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default ElementsDrawer;