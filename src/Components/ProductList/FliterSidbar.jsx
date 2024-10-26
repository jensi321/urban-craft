import { Slider } from 'antd';
import Aos from 'aos';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const FliterSidbar = () => {

    const [priceRange, setPriceRange] = useState([0, 500]);
    const [selectedMaterials, setSelectedMaterials] = useState(['Fabric']);
    const [sortBy, setSortBy] = useState('');
    const [selectedSeaters, setSelectedSeaters] = useState(['2 Seater']);
    const [selectedColors, setSelectedColors] = useState(['Graphite']);
    const [selectedBrands, setSelectedBrands] = useState([]);
    const [selectedDiscounts, setSelectedDiscounts] = useState([]);
    const [dropdownOpen, setDropdownOpen] = useState({
        sort: true,
        price: false,
        materials: false,
        seaters: false,
        colors: false,
        brands: false,
        discounts: false,
    });

    useEffect(() => {
        Aos.init({ once: true });
    })
    const handleSortChange = (option) => {
        setSortBy(option);
    };

    const handleSliderChange = (value) => {
        setPriceRange(value);
    };

    const handleMaterialChange = (material) => {
        setSelectedMaterials((prev) => {
            if (prev.includes(material)) {
                return prev.filter((m) => m !== material);
            } else {
                return [...prev, material];
            }
        });
    };

    const handleSeaterChange = (seater) => {
        setSelectedSeaters((prev) => {
            if (prev.includes(seater)) {
                return prev.filter((s) => s !== seater);
            } else {
                return [...prev, seater];
            }
        });
    };

    const handleColorChange = (color) => {
        setSelectedColors((prev) => {
            if (prev.includes(color)) {
                return prev.filter((c) => c !== color);
            } else {
                return [...prev, color];
            }
        });
    };

    const handleBrandChange = (brand) => {
        setSelectedBrands((prev) => {
            if (prev.includes(brand)) {
                return prev.filter((b) => b !== brand);
            } else {
                return [...prev, brand];
            }
        });
    };

    const handleDiscountChange = (discount) => {
        setSelectedDiscounts((prev) => {
            if (prev.includes(discount)) {
                return prev.filter((d) => d !== discount);
            } else {
                return [...prev, discount];
            }
        });
    };

    const clearAllFilters = () => {
        setPriceRange([0, 500]);
        setSelectedMaterials([]);
        setSortBy('');
        setSelectedSeaters([]);
        setSelectedColors([]);
        setSelectedBrands([]);
        setSelectedDiscounts([]);
    };

    const removeFilter = (filterType, filterValue) => {
        switch (filterType) {
            case 'material':
                handleMaterialChange(filterValue);
                break;
            case 'seater':
                handleSeaterChange(filterValue);
                break;
            case 'color':
                handleColorChange(filterValue);
                break;
            case 'brand':
                handleBrandChange(filterValue);
                break;
            case 'discount':
                handleDiscountChange(filterValue);
                break;
            default:
                break;
        }
    };

    const toggleDropdown = (type) => {
        setDropdownOpen((prev) => ({
            ...prev,
            [type]: !prev[type],
        }));
    };

    return (
        <>
            <div className={`rounded-[16px] lg:w-[24%] flex flex-col gap-5 border border-solid border-gray-200_01 p-3.5 w-full `} data-aos="fade-up" data-aos-duration="1000">

                <div className="flex flex-col gap-4" data-aos="zoom-in" data-aos-duration="1500">
                    <div className="flex flex-wrap items-center justify-between gap-5">
                        <p className="text-[20px] font-medium text-black-900">Filters</p>
                        <Link onClick={clearAllFilters}>
                            <p className='text-[16px] font-normal text-lime-900 cursor-pointer'>Clear all</p>
                        </Link>

                    </div>
                    <div className="flex flex-wrap gap-3">
                        {selectedMaterials.map((material) => (
                            <div key={material} className="rounded-[16px] min-w-[116px] text-[14px] h-[34px] flex cursor-pointer flex-row items-center justify-center gap-1 bg-gray-200_03 px-2.5 text-center text-gray-600_01">
                                <span>{material}</span>
                                <img src="assets/Images/close-2.svg" className='h-[16px] w-[16px] cursor-pointer' alt="" onClick={() => removeFilter('material', material)} />
                            </div>
                        ))}
                        {selectedSeaters.map((seater) => (
                            <div key={seater} className="rounded-[16px] min-w-[116px] text-[14px] h-[34px] flex cursor-pointer flex-row items-center justify-center gap-1 bg-gray-200_03 px-2.5 text-center text-gray-600_01">
                                <span>{seater}</span>
                                <img src="assets/Images/close-2.svg" className='h-[16px] w-[16px] cursor-pointer' alt="" onClick={() => removeFilter('seater', seater)} />
                            </div>
                        ))}
                        {selectedColors.map((color) => (
                            <div key={color} className="rounded-[16px] min-w-[116px] text-[14px] h-[34px] flex cursor-pointer flex-row items-center justify-center gap-1 bg-gray-200_03 px-2.5 text-center text-gray-600_01">
                                <span>{color}</span>
                                <img src="assets/Images/close-2.svg" className='h-[16px] w-[16px] cursor-pointer' alt="" onClick={() => removeFilter('color', color)} />
                            </div>
                        ))}
                        {selectedBrands.map((brand) => (
                            <div key={brand} className="rounded-[16px] min-w-[116px] text-[14px] h-[34px] flex cursor-pointer flex-row items-center justify-center gap-1 bg-gray-200_03 px-2.5 text-center text-gray-600_01">
                                <span>{brand}</span>
                                <img src="assets/Images/close-2.svg" className='h-[16px] w-[16px] cursor-pointer' alt="" onClick={() => removeFilter('brand', brand)} />
                            </div>
                        ))}
                        {selectedDiscounts.map((discount) => (
                            <div key={discount} className="rounded-[16px] min-w-[116px] text-[14px] h-[34px] flex cursor-pointer flex-row items-center justify-center gap-1 bg-gray-200_03 px-2.5 text-center text-gray-600_01">
                                <span>{discount}</span>
                                <img src="assets/Images/close-2.svg" className='h-[16px] w-[16px] cursor-pointer' alt="" onClick={() => removeFilter('discount', discount)} />
                            </div>
                        ))}
                    </div>
                </div>

                <div className='lg:block grid justify-center gap-5 self-stretch transition-all duration-300 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 '>

                    <div className="flex flex-col gap-1.5 border-b border-solid border-gray-200_01 py-5" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="flex justify-between gap-5">
                            <p className="text-[20px] font-medium text-black-900">Sort by</p>
                            <button className={`rounded-[12px] ${!dropdownOpen.sort && ('rotate-[-180deg]')} w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03`} onClick={() => toggleDropdown('sort')}>
                                <img src="assets/Images/arrowdown.svg" alt="" />
                            </button>
                        </div>
                        {dropdownOpen.sort && (
                            <div className="flex flex-col">
                                <label className='text-[16px] w-full gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        className='w-[20px] h-[20px]'
                                        type="radio"
                                        name="sortgroup"
                                        autoComplete='sortgroup'
                                        checked={sortBy === 'lowToHigh'}
                                        onChange={() => handleSortChange('lowToHigh')}
                                    />
                                    <span>Price - Low to high</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        className='w-[20px] h-[20px]'
                                        type="radio"
                                        name="sortgroup"
                                        autoComplete='sortgroup'
                                        checked={sortBy === 'highToLow'}
                                        onChange={() => handleSortChange('highToLow')}
                                    />
                                    <span>Price - High to low</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        className='w-[20px] h-[20px]'
                                        type="radio"
                                        name="sortgroup"
                                        autoComplete='sortgroup'
                                        checked={sortBy === 'latest'}
                                        onChange={() => handleSortChange('latest')}
                                    />
                                    <span>Latest</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        className='w-[20px] h-[20px]'
                                        type="radio"
                                        name="sortgroup"
                                        autoComplete='sortgroup'
                                        checked={sortBy === 'popular'}
                                        onChange={() => handleSortChange('popular')}
                                    />
                                    <span>Popular</span>
                                </label>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5 border-b border-solid border-gray-200_01 py-5" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="flex justify-between gap-5">
                            <p className="text-[20px] self-end font-medium text-black-900">Price range</p>
                            <button className={`rounded-[12px] ${!dropdownOpen.price && ('rotate-[-180deg]')} w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03`} onClick={() => toggleDropdown('price')}>
                                <img src="assets/Images/arrowdown.svg" alt="" />
                            </button>
                        </div>
                        {dropdownOpen.price && (
                            <div className="flex flex-col">
                                <div className="flex justify-between">
                                    <span className='font-[600]'>$ {priceRange[0]}</span>
                                    <span className='font-[600]'>$ {priceRange[1]}</span>
                                </div>
                                <Slider
                                    range
                                    step={100}
                                    min={0}
                                    max={5000}
                                    value={priceRange}
                                    onChange={handleSliderChange}
                                />
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5 border-b border-solid border-gray-200_01 py-5" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="flex justify-between gap-5">
                            <p className="text-[20px] self-end font-medium text-black-900">Materials</p>
                            <button className={`rounded-[12px] ${!dropdownOpen.materials && ('rotate-[-180deg]')} w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03`} onClick={() => toggleDropdown('materials')}>
                                <img src="assets/Images/arrowdown.svg" alt="" />
                            </button>
                        </div>
                        {dropdownOpen.materials && (
                            <div className="flex flex-col">
                                <label className='text-[16px] w-full gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='material' 
                                        autoComplete='material'
                                        checked={selectedMaterials.includes('Fabric')}
                                        onChange={() => handleMaterialChange('Fabric')}
                                    />
                                    <span>Fabric</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='material' 
                                        autoComplete='material'
                                        checked={selectedMaterials.includes('Leather')}
                                        onChange={() => handleMaterialChange('Leather')}
                                    />
                                    <span>Leather</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='material' 
                                        autoComplete='material'
                                        checked={selectedMaterials.includes('Wooden')}
                                        onChange={() => handleMaterialChange('Wooden')}
                                    />
                                    <span>Wooden</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='material' 
                                        autoComplete='material'
                                        checked={selectedMaterials.includes('L shaped')}
                                        onChange={() => handleMaterialChange('L shaped')}
                                    />
                                    <span>L shaped</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='material' 
                                        autoComplete='material'
                                        checked={selectedMaterials.includes('Cum Beds')}
                                        onChange={() => handleMaterialChange('Cum Beds')}
                                    />
                                    <span>Cum Beds</span>
                                </label>
                            </div>
                        )}
                    </div>

                    < div className="flex flex-col gap-1.5 border-b border-solid border-gray-200_01 py-5" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="flex justify-between gap-5">
                            <p className="text-[20px] self-end font-medium text-black-900">Seater</p>
                            <button className={`rounded-[12px] ${!dropdownOpen.seaters && ('rotate-[-180deg]')} w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03`} onClick={() => toggleDropdown('seaters')}>
                                <img src="assets/Images/arrowdown.svg" alt="" />
                            </button>
                        </div>
                        {dropdownOpen.seaters && (
                            <div className="flex flex-col">
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='seater' 
                                        autoComplete='seater'
                                        checked={selectedSeaters.includes('2 Seater')}
                                        onChange={() => handleSeaterChange('2 Seater')}
                                    />
                                    <span>2 Seater</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='seater' 
                                        autoComplete='seater'
                                        checked={selectedSeaters.includes('3 Seater')}
                                        onChange={() => handleSeaterChange('3 Seater')}
                                    />
                                    <span>3 Seater</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='seater' 
                                        autoComplete='seater'
                                        checked={selectedSeaters.includes('3+1 Seater')}
                                        onChange={() => handleSeaterChange('3+1 Seater')}
                                    />
                                    <span>3+1 Seater</span>
                                </label>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5 border-b border-solid border-gray-200_01 py-5" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="flex justify-between gap-5">
                            <p className="text-[20px] self-end font-medium text-black-900">Color</p>
                            <button className={`rounded-[12px] ${!dropdownOpen.colors && ('rotate-[-180deg]')} w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03`} onClick={() => toggleDropdown('colors')}>
                                <img src="assets/Images/arrowdown.svg" alt="" />
                            </button>
                        </div>
                        {dropdownOpen.colors && (
                            <div className="flex flex-col">
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='color'
                                        autoComplete='color'
                                        checked={selectedColors.includes('Graphite')}
                                        onChange={() => handleColorChange('Graphite')}
                                    />
                                    <span>Graphite</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        name='color'
                                        autoComplete='color'
                                        type="checkbox"
                                        checked={selectedColors.includes('Blue')}
                                        onChange={() => handleColorChange('Blue')}
                                    />
                                    <span>Blue</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='color'
                                        autoComplete='color'
                                        checked={selectedColors.includes('Olive')}
                                        onChange={() => handleColorChange('Olive')}
                                    />
                                    <span>Olive</span>
                                </label>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5 border-b border-solid border-gray-200_01 py-5" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="flex justify-between gap-5">
                            <p className="text-[20px] self-end font-medium text-black-900">Brand</p>
                            <button className={`rounded-[12px] ${!dropdownOpen.brands && ('rotate-[-180deg]')} w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03`} onClick={() => toggleDropdown('brands')}>
                                <img src="assets/Images/arrowdown.svg" alt="" />
                            </button>
                        </div>
                        {dropdownOpen.brands && (
                            <div className="flex flex-col">
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='brand'
                                        autoComplete='brand'
                                        checked={selectedBrands.includes('Brand A')}
                                        onChange={() => handleBrandChange('Brand A')}
                                    />
                                    <span>Brand A</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='brand'
                                        autoComplete='brand'
                                        checked={selectedBrands.includes('Brand B')}
                                        onChange={() => handleBrandChange('Brand B')}
                                    />
                                    <span>Brand B</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='brand'
                                        autoComplete='brand'
                                        checked={selectedBrands.includes('Brand C')}
                                        onChange={() => handleBrandChange('Brand C')}
                                    />
                                    <span>Brand C</span>
                                </label>
                            </div>
                        )}
                    </div>

                    <div className="flex flex-col gap-1.5  py-5" data-aos="zoom-in" data-aos-duration="1500">
                        <div className="flex justify-between gap-5">
                            <p className="text-[20px] self-end font-medium text-black-900">Discount</p>
                            <button className={`rounded-[12px] ${!dropdownOpen.discounts && ('rotate-[-180deg]')} w-[24px] px-1.5 flex flex-row items-center justify-center text-center cursor-pointer whitespace-nowrap rounded-[50%] h-[24px] px-1.5 bg-gray-200_03`} onClick={() => toggleDropdown('discounts')}>
                                <img src="assets/Images/arrowdown.svg" alt="" />
                            </button>
                        </div>
                        {dropdownOpen.discounts && (
                            <div className="flex flex-col">
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='discount'
                                        autoComplete='discount'
                                        checked={selectedDiscounts.includes('10% Off')}
                                        onChange={() => handleDiscountChange('10% Off')}
                                    />
                                    <span>10% Off</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='discount'
                                        autoComplete='discount'
                                        checked={selectedDiscounts.includes('20% Off')}
                                        onChange={() => handleDiscountChange('20% Off')}
                                    />
                                    <span>20% Off</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='discount'
                                        autoComplete='discount'
                                        checked={selectedDiscounts.includes('30% Off')}
                                        onChange={() => handleDiscountChange('30% Off')}
                                    />
                                    <span>30% Off</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='discount'
                                        autoComplete='discount'
                                        checked={selectedDiscounts.includes('40% Off')}
                                        onChange={() => handleDiscountChange('40% Off')}
                                    />
                                    <span>40% Off</span>
                                </label>
                                <label className='text-[16px] w-full mt-3 gap-2 py-1.5 text-black-900_01 flex items-center gap-[5px] cursor-pointer'>
                                    <input
                                        type="checkbox"
                                        name='discount'
                                        autoComplete='discount'
                                        checked={selectedDiscounts.includes('50% Off')}
                                        onChange={() => handleDiscountChange('50% Off')}
                                    />
                                    <span>50% Off</span>
                                </label>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </>
    )
}

export default FliterSidbar