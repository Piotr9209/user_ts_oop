// 3) Stwórz strukturę danych związaną z użytkownikami.
// Obiekt charakteryzujący użytkownika:
// Ma mieć: Imię, Nazwisko, datę urodzenia, haslo, płeć, adres email, poziom dostepu = ""user""
// Ma umożliwiać: zmianę email

// Obiekt charakteryzujący administratora:
// Obiekt ten ma dziedziczyć po użytkowniku informacje z dodatkowymi możliwościami
// Ma Miec: poziom dostepu dla siebie = ""admin""
// Ma umożliwiać: zmieniać w obiekcie użytkownik poziom dostępu na admin", oraz modyfikować jego hasło.

// Dodatkowo User ma mieć walidacje wykonaną za pomocą is.js oraz datę obsługiwaną przez bibliotekę moment.js
// email ma być poprawnym emailem
// password ma mieć min 8 znaków, co najmniej jedną wielką literę i co najmniej jedną cyfrę oraz co najmniej 1 znak specjalny
// płeć musi być ze zbioru [male, female]
// data (nieważne jaka wejdzie) do propa musi wejść w formacie MM/DD/YYYY
// imię i nazwisko musi być niepuste, jeśli któraś z walidacji się nie powiedzie obiekt ma nie być tworzony, tylko ma zwracać error z odpowiednimi komunikatami o niepowiedzionej walidacji

import { User } from './components/User'
import { Admin } from './components/Admin'




const user = new User(
    "piotr",
    "kowalski",
    "piotr@gmail.com",
    "Qwer12342?!",
    "20.03.1990",
    'male'
);

const user2 = new User(
    "piotr",
    "jaslowski",
    "PJ@interia.pl",
    "Jacek90232?!",
    "15.01.1988",
    'male'
);

const admin = new Admin(
    "jan",
    "kowalski",
    "jan@gmail.com",
    "haslO123?!",
    "19.02.1988",
    "female",
);


const adminFromUser = admin.changeEntryLevel(user);
const adminFromUser2 = admin.changeEntryLevel(user2);

