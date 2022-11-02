/*
 * @Author: fg
 * @Date: 2022-11-02 15:04:36
 * @LastEditors: fg
 * @LastEditTime: 2022-11-02 15:14:27
 * @Description: connect
 */

type Conditional<Type, Condition, TruthyResult, FalsyResult> = Type extends Condition ? TruthyResult : FalsyResult;

// passed!
type Result1 = Conditional<'toto', string, 'passed!', 'rejected!'>
// rejected!
type Result2 = Conditional<'toto', boolean, 'passed!', 'rejected!'>

type ProcessInput<Input, SecondInput extends Input = Input, ThirdInput extends Input = SecondInput> = number;