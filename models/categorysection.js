class CategorySection {
    constructor(id, categoryId, title, bgImage, issue1, issue2, issue3, issue4, issue5, issue6, issue7, tax, logistics, serviceCharge, serviceThumbImage)
    {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.bgImage = bgImage;
        this.issue1 = issue1;
        this.issue2 = issue2;
        this.issue3 = issue3;
        this.issue4 = issue4;
        this.issue5 = issue5;
        this.issue6 = issue6;
        this.issue7 = issue7;
        this.tax = tax;
        this.logistics = logistics;
        this.serviceCharge = serviceCharge;
        this.serviceThumbImage = serviceThumbImage;
    }
}

export default CategorySection;