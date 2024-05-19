import {
  Header,
  Footer,
  Button,
  Dropdown,
  EmptyComponent,
  FilterColor,
  FilterPriceRange,
  FilterSize,
  Product,
  Modal,
  options,
} from './components'
import { useProducts } from './hooks/use-products'

import './app.scss'

export function App() {
  const {
    filteredProducts,
    limitedProducts,
    sortModalVisible,
    filterModalVisible,
    cart,
    setCart,
    setFilterModalVisible,
    setSortModalVisible,
    handleLoadMoreProducts,
    handleSortingLogic,
    handleFilterChange,
    handlePriceChange,
    handleSubmitFilter,
    handleResetFilter,
  } = useProducts()

  return (
    <div className="flexContainer">
      <Header cartAmount={cart.length} />
      <main
        className="mainContentContainer"
        style={{
          display: filterModalVisible || sortModalVisible ? 'none' : 'flex',
        }}
      >
        <section className="mainContentHeader">
          <h1>Blusas</h1>
          <Dropdown handleSelectedOption={handleSortingLogic} />
        </section>
        <section className="responsiveFilter">
          <div onClick={() => setFilterModalVisible(true)}>Filtrar</div>
          <span className="line" />
          <div onClick={() => setSortModalVisible(true)}>Ordenar</div>
        </section>
        <section className="mainContent">
          <div className="formContainer">
            <FilterColor handleChange={handleFilterChange} limited />
            <FilterSize handleChange={handleFilterChange} />
            <FilterPriceRange handleChange={handlePriceChange} />
            <Button
              style={{ width: '10rem' }}
              label="Limpar"
              variant="secondary"
              onClick={handleResetFilter}
            />
          </div>
          <div className="productsContainer">
            <div className="products">
              {limitedProducts.length ? (
                limitedProducts.map((item, index) => (
                  <Product
                    key={`${index}`}
                    addCart={() => setCart((state) => [...state, item])}
                    {...item}
                  />
                ))
              ) : (
                <EmptyComponent />
              )}
            </div>
            {filteredProducts.length > limitedProducts.length && (
              <div className="loadMoreButton">
                <Button
                  label="Carregar mais"
                  variant="primary"
                  onClick={handleLoadMoreProducts}
                />
              </div>
            )}
          </div>
        </section>
      </main>
      <Footer />
      {sortModalVisible && (
        <Modal
          title="Ordenar"
          onClose={() => setSortModalVisible((state) => !state)}
        >
          {options.map((op) => (
            <p
              key={op}
              onClick={() => {
                handleSortingLogic(op)
                setSortModalVisible((state) => !state)
              }}
            >
              {op}
            </p>
          ))}
        </Modal>
      )}
      {filterModalVisible && (
        <Modal
          title="Filtrar"
          onClose={() => setFilterModalVisible((state) => !state)}
        >
          <form onSubmit={handleSubmitFilter}>
            <FilterColor handleChange={handleFilterChange} />
            <FilterSize handleChange={handleFilterChange} />
            <FilterPriceRange handleChange={handlePriceChange} />
            <div className="doubleButtonsContainer">
              <Button
                type="submit"
                style={{ width: '10rem' }}
                label="Aplicar"
                variant="primary"
              />
            </div>
          </form>
        </Modal>
      )}
    </div>
  )
}
