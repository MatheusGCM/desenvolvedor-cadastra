import { ChangeEvent, FormEvent, useEffect, useState } from 'react'

import { FilterProps, Product } from '@/@types/Product'
import { getProducts } from '@/api/get-products'
import { applyFilters } from '@/utils/apply-filters'
import { compareDates } from '@/utils/compare-dates'

export function useProducts() {
  const [products, setProducts] = useState([] as Product[])
  const [filter, setFilter] = useState({} as FilterProps)
  const [productsPerPage, setProductsPerPage] = useState(9)
  const [cart, setCart] = useState([] as Product[])
  const [isShowMore, setIsShowMore] = useState(false)
  const [sortModalVisible, setSortModalVisible] = useState(false)
  const [filterModalVisible, setFilterModalVisible] = useState(false)

  function handleSubmitFilter(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const filteredProducts = products.filter((item) =>
      applyFilters(item, filter),
    )

    setProducts(filteredProducts)
    setFilterModalVisible((state) => !state)
  }

  function handleResetFilter() {
    const filter = { color: '', size: '', priceRange: '' }
    setFilter(filter)
  }

  function handleFilterChange(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target
    setFilter((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }))
  }

  const handlePriceChange = (value: string) => {
    setFilter((prevFilters) => ({
      ...prevFilters,
      priceRange: value,
    }))
  }

  const filteredProducts =
    productsPerPage === 4
      ? products
      : products.filter((item) => applyFilters(item, filter))
  const limitedProducts = isShowMore
    ? filteredProducts
    : filteredProducts.slice(0, productsPerPage)

  function handleSortingLogic(op: string) {
    if (op === 'Mais recentes') {
      setProducts((state) => state.sort(compareDates).slice())
    } else if (op === 'Menor preço') {
      setProducts((state) => state.sort((a, b) => a.price - b.price).slice())
    } else if (op === 'Maior preço') {
      setProducts((state) => state.sort((a, b) => b.price - a.price).slice())
    }
  }

  function handleLoadMoreProducts() {
    setIsShowMore(true)
  }

  function handleResize() {
    let perPage = 4
    if (window.innerWidth > 768) {
      perPage = 9
      setFilterModalVisible(false)
      setSortModalVisible(false)
    }
    setProductsPerPage(perPage)
  }

  async function fetchData() {
    const response = await getProducts()
    setProducts(response)
  }

  useEffect(() => {
    fetchData()
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    products,
    filteredProducts,
    limitedProducts,
    sortModalVisible,
    filterModalVisible,
    cart,
    setCart,
    setFilterModalVisible,
    setSortModalVisible,
    handleSortingLogic,
    handleLoadMoreProducts,
    handleFilterChange,
    handlePriceChange,
    handleSubmitFilter,
    handleResetFilter,
  }
}
