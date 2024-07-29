Documentation

1. Описание приложения
Онлайн-магазин одежды, где пользователи могут просматривать товары, добавлять их в избранное, а также добавлять вещи в корзину. На странице магазина есть возможность искать и сортировать товары по названию, применять фильтры на категорию, цену и цвет. Страница корзины еще не реализована, функционал позже будет описан.

2. Технологии и интрументы
Для создания приложения был использован следующий стек технологий: ReactJS для разработки SPA

3.  Описание компонентов
Компонент Header будет использоваться на странице магазина и корзины, содержит в себе логотип, меню, а также количество товаров в корзине и в избранном. Header/LogoContainer - глупый компонент для отображения бургер-меню и логотипа. Header/Menu - компонет для отображения навигации по страницам сайта магазина (ссылок для навигации нет, тоже глупый). Header/Menu/MenuItem - компонент для отображения элемента меню, принимает в качестве пропсов название и наличие стрелки. Header/RightSide - компонент правой части хэдера сайта, показывает количество товаров в корзине и избранном. Он использует контекст headerContex для отображения динамичных счестчиков. Header/RightSide/HeaderIcon - тоже глупый компонент, принимает иконку, изображение иконки и счетчик если он нужен. 
ContentArea - компонент шапки сайта, отображает название страницы и фото (серый квадрат).

pages/ShopPage - компонент для страницы магазина. Включает в себя хэдер, шапку страницы, компоненты для отображения фильтрации и товаров, блок для подписки и футер. Он предоставляет доступ к контекту продуктов productsContex для боковой фильтрации и оболочки продуктов. 
ShopPage/SideBar - боковая панель фильтрации и блока Reviewed By You. Применяют фильтрацию по строке поиска и фильтрам, изменяет отфильтрованные продукты через редьюсер. Так же блокирует при необходимости кнопку применения фильтра. Компонент SategoryMenuItem - глупый для отображения категории товара, Color - глупый для отображения чекбоксов с цветами, ReviewedByYou - генерирует один раз три рандомных продукта внизу фильтра, SideBarItem - глупый для отображения блоков для фильтрации (по категории, цене и цвету). 
ShopPage/ProductsWrapper - для отображения количества продуктов, сортировки и самиз продуктов. ProductsWrapper/Sort - сортирует товары используя функцию sortProducts и устанавливает через редьюсер отсортированные продукты. ProductsWrapper/Products - для отображения продуктов, получает из контекста их и проходится циклом по ним.  ProductsWrapper/Products/Product - отображение конкретного продукта,  а также функционал для добавления его в корзину и избранное, в том числе удаление из избранного. 
ProductsWrapper/Pagination - отображает количество страниц и кнопки перехода. Получает отфильтрованные продукты из контекста, высчитывает количество продуктов на странице и устанавливает пагинированные продукты в контекст для отображения. ProductsWrapper/Pagination/Page - компонент для отображения страницы и обработки клика по ней.
NewsLetter - компонент для отображения блока подписки.
Footer - низ сайта с ссылками и доп информацией.

CartPage - страница корзины. CartPage/OrderWrapper - обретка для продуктов в корзине и итоговой стоимости и скидки. CartPage/OrderWrapper/Order - итоговая стоимость с учетом скидок и промокода. В нем рассчитывается итоговая сумма по продуктам из локального хранилища. И дата доставки устанавливается как +5 дней с текущей даты. CartPage/OrderWrapper/ProductList - вывод всех продуктов из корзины. CartPage/OrderWrapper/ProductList/Product - глупый компонент для вывода отдельного продукта. CartPage/Promocode - применение промокода. 

4. Логика работы приложения
При добавлении товара в избранное или корзину, данные сохраняются в LocalStorage, чтобы корректно отображать данные о количестве товаров в корзине и избранном и данные на странице корзины на стороне пользователя при обновлении страницы или при позжем возвращении на сайт. При фильтрации продуктов данные устанавливаются в контекст, чтобы они были доступны для фильтрации, сортировки и пагинации в разных компонентах. Так же есть отдельный контекст для фильтра

В странице корзины выводятся продукты из локального хранилища, рассчитывается итоговая сумма и применен ли промокод. Для промокода создан отдельный контекст и редьюсер для управления им. Информация хранится в объекте с двумя свойствами: применен ли промокод и скидка, из этой информации идет расчет в компоненте Order итоговой стоимости.