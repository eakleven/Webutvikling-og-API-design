const React = require('react');
const {mount} =require('enzyme');
const {Match} = require("../src/match");

function checkIsQuizDisplayed (driver){
    const questions = driver.find('.question');
    expect(questions.length).toEqual(1);

    const answers = driver.find('.answer');
    expect(answers.length).toEqual(4
    )
}

test("Test is rendered", () =>{
    const driver = mount(<Match/>)
    checkIsQuizDisplayed(driver);
})

test("Test answer", () =>{
    const driver = mount(<Match/>)

    let msg = undefined;

    global.alert = (s) => {msg = s};

    const first = driver.find('.answer').at(0);
    first.simulate('click');

    checkIsQuizDisplayed(driver);
    expect(msg).toBeDefined();
})

test("Correct answer", () => {
    const driver = mount(<Match/>)

    let msg = undefined;

    const answer = driver.find('.answer');

    global.alert = (s) => {msg = s};

    for (let i = 0; i < answer.length; i++){
        let selectAnswer = driver.find('.answer').at(i);
        selectAnswer.simulate('click');
        if (msg === "Correct!"){
            expect(msg).toEqual("Correct!");
            break;

        }
    }
})