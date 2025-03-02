```mermaid
erDiagram
    CUSTOMER ||--o{ ORDER : places
    ORDER ||--|{ LINE-ITEM : contains
    PRODUCT ||--o{ LINE-ITEM : includes

    CUSTOMER {
        string name
        string email
    }
    ORDER {
        int orderId
        date orderDate
    }
    PRODUCT {
        int productId
        string productName
        float price
    }

    PAINTS ||--|{ LINE-ITEM : has

    PAINTS {
        string paint
        float price
    }

    INTERIOR ||--|{ LINE-ITEM : has

    INTERIOR {
        string interior
        float price
    }

    TECHNOLOGY ||--|{ LINE-ITEM : has

    TECHNOLOGY {
        string technology
        float price
    }

    WHEELS ||--|{ LINE-ITEM : has

    WHEELS {
        string wheels
        float price
    }