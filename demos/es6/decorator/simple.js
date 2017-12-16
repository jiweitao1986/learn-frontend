// @testable
// class MyTestableClass {
//     static isTestable = false;
// }
//
// // function testable(target) {
// //     target.isTestable = true;
// // }
//
// console.log(MyTestableClass.isTestable);

function Effect({dispatch} = {dispatch}) {
    console.log(dispatch);
}

class CustomEffect {

    @Effect({dispatch: false})
    load$ = 'aaa';

}