<?php
namespace Training\Test3\Block;

class Template extends \Magento\Framework\View\Element\Template
{

    public function __construct(\Magento\Backend\Block\Template\Context $context, array $data = [])
    {
        parent::__construct($context, $data);
    }

    public function getColor()
    {
        return 'color:red;';
    }

}
