import React from 'react';
import Work from "../work.component";
import renderer from 'react-test-renderer'
import {expect,test} from '@jest/globals';

test('Work SnapShot',()=>{
    const componentToTest = renderer.create(<Work/>).toJSON()
    expect(componentToTest).toMatchSnapshot()
})