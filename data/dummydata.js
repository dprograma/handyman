import Category from '../models/category';
import CategorySection from '../models/categorysection';

export const CATEGORIES = [
    new Category('a1', 'Plumbing', '#f5428d'),
    new Category('a2', 'Electricals', '#f54242'),
    new Category('a3', 'Aluminium', '#f5428d'),
    new Category('a4', 'Carpentry', '#f54242'),
    new Category('a5', 'Damp Treatment', '#f5428d'),
    new Category('a6', 'Installations and Repair', '#f54242'),
    new Category('a7', 'Ceramic and Epoxy', '#f5428d'),
    new Category('a8', 'Welding', '#f54242'),
    new Category('a9', 'Others', '#f5428d')
];

export const CATEGORYSECTIONS = [
    new CategorySection('c1', 'a1', 'Plumbing', '../assets/plumingbg.png', 'Block Drainage', 'Pipe and Running Issues', 'Leakages', 'Broken Faucets and Sanitary Wares', 'Broken Pumping Machine', 'Water Treatment', 'Others', '1500', '20000', '150000', '../assets/plumbingthumbimg.png'),
    new CategorySection('c2', 'a2', 'Electricals', '../assets/electricalsbg.png', 'Bad Switches and Sockets', 'Circuit Problem', 'Burnt Cables', 'Surge Issue', 'Installation of Fittings', 'Solar Repairs and Inverters', 'Others', '1800', '20000', '180000', '../assets/electricalsthumbimg.png'),
    new CategorySection('c3', 'a3', 'Aluminium', '../assets/aluminiumbg.png', 'Broken Glass Windows', 'Roof Leakages', 'Others', '', '', '', '', '1200', '20000', '120000', '../assets/aluminiumthumbimg.png'),
    new CategorySection('c4', 'a4', 'Carpentry', '../assets/carpentrybg.png', 'Sofa Fix', 'Cabinet Fix', 'Wardrobe Fix', 'Door Fix', 'Others', '', '',  '1300', '20000', '130000', '../assets/carpentrythumbimg.png'),
    new CategorySection('c5', 'a5', 'Damp Treatment', '../assets/damptreatmentbg.png', 'Wall Repairs', 'Paintings', 'Screed and Fix', 'Water Collection and Control', 'Pave Stones and Interlocking System', 'Others', '', '1600', '20000', '160000', '../assets/damptreatmentthumbimg.png'),
    new CategorySection('c6', 'a6', 'Installations and Repairs', '../assets/installationandrepairbg.png', 'DSTV', 'Air Conditioning', 'CCTV', 'Central Audio System', 'Others', '', '', '1000', '20000', '100000', '../assets/installationandrepairthumbimg.png'),
    new CategorySection('c7', 'a7', 'Ceramic and Epoxy', '../assets/ceramicandepoxybg.png', 'Floor Finishing Repairs', 'Wall Paper Fixing and Panels', 'POP Ceiling Repairs', 'Others', '', '', '', '1000', '20000', '100000', '../assets/ceramicandepoxythumbimg.png'),
    new CategorySection('c8', 'a8', 'Welding', '../assets/weldingbg.png', 'Gates and Rails Repair', 'Tank Base Repair and General Welding Repairs',  'Others', '', '', '', '', '900', '20000', '90000', '../assets/weldingthumbimg.png'),
    new CategorySection('c9', 'a9', 'Other', '../assets/otherbg.png', 'Block Drainage', 'Pipe and Running Issues', 'Leakages', 'Broken Faucets and Sanitary Wares', 'Broken Pumping Machine', 'Water Treatment', 'Others', '1500', '20000', '150000', '../assets/otherthumbimg.png'),
];