import { render } from './framework/render.js';
import ProfileView from './view/profile-view.js';
import FooterStatisticsView from './view/footer-statistics-view.js';
import NavigationView from './view/navigation-view.js';
import SortView from './view/sort-view.js';
import FilmsPresenter from './presenters/films-presenter.js';
import MoviesModel from './model/movies-model.js';

const headerElement = document.querySelector('.header');
const mainElement = document.querySelector('.main');
const footerStatisticsElement = document.querySelector('.footer__statistics');
const moviesModel = new MoviesModel();
const filmsPresenter = new FilmsPresenter(mainElement, moviesModel);

render(new ProfileView(), headerElement);
render(new NavigationView(), mainElement);
render(new SortView(), mainElement);
filmsPresenter.init();
render(new FooterStatisticsView(), footerStatisticsElement);
