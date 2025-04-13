require 'spec_helper'

RSpec.describe 'bin/brain-progression' do
  it 'has description' do
    file_path = './bin/brain-progression'
    expect(File).to exist(file_path)
    file_content = File.read(file_path)
    expect(file_content).to start_with('#!/usr/bin/env node')
  end